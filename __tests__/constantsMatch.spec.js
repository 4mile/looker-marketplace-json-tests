const marketplace = require('../marketplace.json')
const lookmlParser = require('lookml-parser')
 

describe('Constants Match Between Manifest.lkml and Marketplace.json', ()=>{
    test( 'Constants Match', async ()=>{
        result = await lookmlParser.parseFiles({
            source:  "manifest.lkml",
            fileOutput: "by-type",
            globOptions: {},
            readFileOptions: {encoding:"utf-8"},
            readFileConcurrency: 4,
            console: console
        })
        let manifestConst = Object.keys(result.manifest.constant).map( item => item)
        let marketplaceConst = Object.keys(marketplace.constants).map(item => item)
        let constMatch;
        if(JSON.stringify(manifestConst) === JSON.stringify(marketplaceConst)) {
            constMatch = true
        } else constMatch = false
        
        expect(constMatch).toBe(true)

    })
})