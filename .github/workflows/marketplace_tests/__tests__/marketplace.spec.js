const lookmlParser = require('lookml-parser')
const Ajv = require("ajv")
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
const fs = require('fs')
const process = require('process')
process.chdir('../../../')
const cwd = process.cwd();
const marketplace = require(`${cwd}/marketplace.json`)

let schema = {
    type: "object",
    additionalProperties: true
  }

describe('Marketplace Automation Tests', ()=> {

    test('License File Exists', ()=> {
        const fileExists = fs.existsSync(`${cwd}/LICENSE`);
        expect(fileExists).toBe(true);
    })
    test('READEME File Exists', ()=> {
        const fileExists = fs.existsSync(`${cwd}/readme.md`);
        expect(fileExists).toBe(true);
    })
    test('Marketplace JSON Exists', ()=> {
        const fileExists = fs.existsSync(`${cwd}/marketplace.json`);
        expect(fileExists).toBe(true);
    })
    test('Manifest File Exists', ()=> {
        const fileExists = fs.existsSync(`${cwd}/manifest.lkml`);
        expect(fileExists).toBe(true);
    })
    test('At Least One Dashboard File Exists', ()=> {
        const files = fs.readdirSync(`${cwd}/dashboards/`);
        dashboardFiles = files.filter( item => {
            return item.includes('dashboard.lookml')
        })
        expect(dashboardFiles.length).toBeGreaterThan(0);
    })
    
})


describe('Marketplace.json has valid JSON Schema', ()=> {
    test('label property exists and is valid', ()=> {
        schema = {...schema,
            properties: { label: {type: "string"}},
            required: ["label"],
        }
        const validate = ajv.compile(schema)
        const valid = validate(marketplace)
        expect(valid).toBe(true)
    })
    test('category_label property exists and is valid', ()=> {
        schema = {...schema,
            properties: { category_label: {type: "string"}},
            required: ["category_label"],
        }
        const validate = ajv.compile(schema)
        const valid = validate(marketplace)
        expect(valid).toBe(true)
    })
    test('branding property exists and is valid', ()=> {
        schema = {...schema,
            properties: { branding: {type: "object"}},
            required: ["branding"],
        }
        const validate = ajv.compile(schema)
        const valid = validate(marketplace)
        expect(valid).toBe(true)
    })
    test('models property exists and is valid', ()=> {
        schema = {...schema,
            properties: { models: {type: "array"}},
            required: ["models"],
        }
        const validate = ajv.compile(schema)
        const valid = validate(marketplace)
        expect(valid).toBe(true)
    })
    test('constants property exists and is valid', ()=> {
        schema = {...schema,
            properties: { constants: {type: "object"}},
            required: ["constants"],
        }
        const validate = ajv.compile(schema)
        const valid = validate(marketplace)
        expect(valid).toBe(true)
    })
})


describe('Constants Match Between Manifest.lkml and Marketplace.json', ()=>{
    test( 'Constants Match', async ()=>{
        result = await lookmlParser.parseFiles({
            source:  `${cwd}/manifest.lkml`,
            fileOutput: "by-type",
            globOptions: {},
            readFileOptions: {encoding:"utf-8"},
            readFileConcurrency: 4,
            // console: console
        })
        let manifestConst = Object.keys(result?.manifest?.constant).map( item => item)
        let marketplaceConst = Object.keys(marketplace.constants).map(item => item)
        let constMatch;
        if(JSON.stringify(manifestConst) === JSON.stringify(marketplaceConst)) {
            constMatch = true
        } else constMatch = false   
        expect(constMatch).toBe(true)

    })
})