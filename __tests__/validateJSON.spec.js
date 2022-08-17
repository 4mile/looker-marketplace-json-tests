const Ajv = require("ajv")
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
const marketplace = require('../marketplace.json')

let schema = {
  type: "object",
  additionalProperties: true
}

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
