const fs = require('fs')
const cwd = require('process').cwd();

describe('Required Looker Block Files exist', ()=> {

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
