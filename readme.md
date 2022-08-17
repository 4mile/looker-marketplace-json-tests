# Marketplace Automation Test Repo

This repository contains infomation and tests meant to streamline the validation of Looker Marketplace projects submitted by third party developers of Custom Visualiztions, Blocks and other Looker custom projects.

## Tools

1. Jest
2. Test Reporter - Will report test results in GitHub Actions 
3. GitHub Actions CI - Will run tests on PR

## What will be Tested
1. Existence of key files
    - README.MD 
    - LICENSE
    - One *.dashboard.lookml file 
2. Valid Marketplace.json file
3. Constants exist and match in:
    - Manifest.lkml
    - Marketplace.json

## Setup

1. Copy/paste contents of `package.json` into the target repository `package.json` to be tested.

```
  "dependencies": {
    "ajv": "^8.11.0",
    "lookml-parser": "6.5",
    "jest": "^28.1.3",
    "jest-junit": "^14.0.0"
  }

  > npm install
```
OR

```
> npm install ajv lookml-parser jest jest-junit
```

2. Create script to run test and add to `package.json`

```
  "scripts": {
    "test": "jest --ci --reporters=default --reporters=jest-junit"
  },
```

3. Setup Test Reporting by adding parameters below to the `package.json`:

```
  "scripts": {
    "test": ...
  },
  "jest-junit": {
    "outputDirectory": "reports",
    "outputName": "jest-junit.xml",
    "ancestorSeparator": " › ",
    "uniqueOutputName": "false",
    "suiteNameTemplate": "{filepath}",
    "classNameTemplate": "{classname}",
    "titleTemplate": "{title}"
  },
```

4. Copy/paste `/.github` to the root of target repository to be tested. This directory contains the GitHub Actions `yml` file that runs the CI script.

5. Copy/paste `/__tests__` to the root of target repository to be tested. This directory contains the actual unit tests to be performed on the target repository to be tested.

6. Confirm tests are running locally:

```
npm test
```

7. Confirm tests run when GitHub Actions is triggered on push or PR

```
> git add .
> git commit -m"my commit message"
> git push origin <<branch>> 
```

Note that `<<branch>>` should match `branches` specified in the workflow yml file `/.github/workflows/Node_CI.yml`, if you are pushing directly to `<<branch>>`. 

Otherwise, GitHub Actions will run when a PR is opened against `<<branch>>`.

If GitHub Actions Ran, you should see this on GitHub Actions tab:

