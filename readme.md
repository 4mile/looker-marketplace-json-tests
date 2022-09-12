# Marketplace Automation Test Repo

This repository contains infomation and tests meant to streamline the validation of Looker Marketplace projects submitted by third party developers of Custom Visualiztions, Blocks and other Looker custom projects.

## Tools

1. Jest
2. Test Reporter - Will report test results in GitHub Actions 
3. GitHub Actions CI - Will run tests on PR or Push

## What will be Tested
1. Existence of key files
    - README.MD 
    - LICENSE
    - One *.dashboard.lookml file 
2. Valid Marketplace.json file
3. Constants exist and match in:
    - Manifest.lkml
    - Marketplace.json
4. Constants are unique in Marketplace.json
5. Constants Labels are unique in Marketplace.json
6. File extensions for model/views are `.lkml` and not `.lookml`

## Setup

1. Add the folder named `/.github` to the Looker repo to be tested.

2. Commit and PR to GitHub

3. On GitHub Actions tab, see the CI execution flow and results of tests.