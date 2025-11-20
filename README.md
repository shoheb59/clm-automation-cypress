# CLM Automation (Cypress) — Handover Guide

This repository contains end-to-end tests for the CLM application written with Cypress. This document is a concise handover aimed at a junior engineer: how to install, run, extend, and troubleshoot the test suite, plus notes about CI and reporting.

## Quick facts
- Framework: Cypress (v10+ style project structure)
- Test files: `cypress/e2e/tests/`
- Page objects: `cypress/pages/`
- Fixtures: `cypress/fixtures/`
- Custom commands & helpers: `cypress/support/` and `cypress/support/helper/`
- CI: GitHub Actions workflow at `.github/workflows/build.yml`
- Allure reporting: `allure-results/` -> generated `allure-report/`

## Prerequisites
- Node.js (LTS) installed. Recommended: Node 18+.
- npm (comes with Node.js)
- Optional: Allure CLI if you want to generate reports locally (or use the npm script below).

## Install dependencies
Open PowerShell in the repository root and run:

```powershell
npm ci
```

This installs pinned dependencies based on `package-lock.json`.

## Run tests

Interactive runner (recommended for development):

```powershell
npx cypress open
```

Run the full suite headlessly (CI-style):

```powershell
npx cypress run
```

Run a single spec file (example):

```powershell
npx cypress run --spec "cypress/e2e/tests/CLM/loginTest.cy.js"
```

Run a single test inside a spec interactively: open the spec and append `.only` to `it` or `describe` in the test file.

## Test structure & conventions
- Tests: `cypress/e2e/tests/` organized by feature area (e.g., `CLM`, `KONSHUB`).
- Page objects: inside `cypress/pages/` keep high-level interaction methods. Name pages like `loginPage.js`, `shipmentPage.js` etc.
- Fixtures: static JSON data for tests is under `cypress/fixtures/` (e.g., `loginData.json`, `materialData.json`). Prefer fixtures for stable test data.
- Support: `cypress/support/` contains `commands.js` and helper modules used by tests.
- Reports/screenshots: Cypress will put screenshots and videos in `cypress/screenshots/` and `cypress/videos/` unless configured otherwise.

Conventions used in this repo:
- Test files are `.cy.js` and grouped in `cypress/e2e/tests` folders.
- Page object methods should be small and single-purpose (e.g., `login(username, password)`).
- Use fixtures for test data; reference them via `cy.fixture('file')` or import JSON where appropriate.

## Generating Allure report (locally)
This repo uses Allure to convert raw results into an HTML report. After a test run that produces `allure-results/` you can generate the HTML report:

```powershell
# generate an HTML report into `allure-report`
npx allure generate allure-results --clean -o allure-report
# then open the generated `allure-report/index.html` in a browser
```

CI already runs these steps (see `.github/workflows/build.yml`) and uploads the `allure-report` as an artifact.

## Running only a specific test or retry
- To run a single test inside a spec use `.only` on the `it` or `describe` block.
- To add retries temporarily, modify `cypress.config.js` or use tags/conditional logic in the test.

## Debugging tips
- Use `cy.log()` and `console.log()` in tests and page objects.
- Rerun failing spec with `npx cypress open` and click the failing test to watch commands replay.
- Inspect screenshots in `cypress/screenshots/` after failures.
- Add `cy.screenshot()` at the point you want to capture state.

## Adding a new test — checklist
1. Add a new spec under `cypress/e2e/tests/<area>/yourTest.cy.js`.
2. Create or reuse a page object in `cypress/pages/` for interactions.
3. Add any static test data to `cypress/fixtures/` and reference it in the test.
4. Use or add helper functions in `cypress/support/helper/` if logic is shared.
5. Run the spec locally with `npx cypress run --spec "path/to/spec"`.
6. Commit, push to a feature branch, open a PR and request review.

## Branching & CI
- Pushes to `main` trigger the GitHub Actions workflow `.github/workflows/build.yml` which: checks out code, installs deps, runs tests, generates the Allure report, and uploads it as an artifact.

## Useful examples

Run a single test file with headless mode and generate allure-results (CI-like):

```powershell
npx cypress run --spec "cypress/e2e/tests/CLM/loginTest.cy.js" --reporter mocha-junit-reporter
# ensure your reporter writes into `allure-results/` or other configured directory
```

Open interactive Cypress and run a spec that watches test video/screenshots:

```powershell
npx cypress open
```

## Code style & linting
There is no enforced linter configured in this repository. When adding scripts or new JS modules, follow existing style: keep functions small, use clear names, and export/import with CommonJS style used in other files.

## Where to look for things
- Tests: `cypress/e2e/tests/`
- Page objects: `cypress/pages/`
- Fixtures: `cypress/fixtures/`
- Support & commands: `cypress/support/`
- CI workflow: `.github/workflows/build.yml`
- Generated reports: `allure-report/` (committed in repo) and `allure-results/` (test outputs)

## Troubleshooting common issues
- Node version mismatch: use Node LTS. Check with `node -v`.
- Missing deps: run `npm ci` to install cleanly.
- Failing tests locally but passing CI: check environment variables or data in fixtures; CI runs headless and may have different timing.
- Allure report empty: ensure tests produce `allure-results/`. Check reporter config in `package.json` (if present) or test runner args.

## Contacts / Handover notes
- Primary owner: (replace with real name/email)
- When creating new features, include a short description in the test file header comment with purpose and a link to any associated ticket.

---
This README is intended to get you started quickly and keep the repository maintainable for incoming engineers. If you'd like, I can add a short `docs/quick-start.md` with screenshots and a small video walkthrough next.
# clm-automation-cypress

## Description
`clm-automation-cypress` is a project focused on end-to-end testing using Cypress. This repository contains test scripts and configurations to automate testing for your application. It includes robust test cases for shipment creation, material management, and other logistics-related workflows.

## Features
- End-to-End testing using Cypress.
- Modular structure with Page Object Model (POM) for maintainability.
- Integration with Allure and Mochawesome for detailed reporting.
- Easy integration with CI/CD pipelines.
- Support for multiple environments and configurations.

## Installation
To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/shoheb59/clm-automation-cypress.git
   ```
2. Navigate to the project directory:
   ```bash
   cd clm-automation-cypress
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
Run the Cypress tests using the following command:
```bash
npx cypress open
```
or for headless mode:
```bash
npx cypress run
```

### Generating Reports
- **Allure Report**: After running tests, generate the Allure report using:
  ```bash
  npm run report:allure
  ```
  Open the report:
  ```bash
  allure open
  ```
- **Mochawesome Report**: The Mochawesome report is automatically generated in the `mochawesome-report/` folder after test execution.

## Folder Structure
- `cypress/` - Contains test cases, page objects, and supporting files.
  - `e2e/tests/` - Test scripts for various scenarios.
  - `pages/` - Page Object Model (POM) files for UI interactions.
  - `fixtures/` - Test data files.
  - `support/` - Custom commands and utilities.
- `allure-report/` - Allure report files.
- `mochawesome-report/` - Mochawesome report files.
- `package.json` - Project dependencies and scripts.
- `cypress.config.js` - Cypress configuration file.

## Test Scenarios
### Shipment Tests
- **SC 1**: Verify that a user can create multiple shipments.
- **SC 2**: Verify that a user can create a shipment with an open status.
- **SC 3**: Verify that a user can create a shipment with an approved status.
- **SC 4**: Verify that a user can update a shipment from open to approved status.
- **SC 5**: Verify that a user can complete a shipment after approval.

### Additional Scenarios
- Material management tests.
- Team management tests.
- Shipment rejection and rebooking tests.

## Reporting
This project supports two types of reports:
1. **Allure Reports**: Provides detailed insights into test execution with screenshots and logs.
2. **Mochawesome Reports**: Offers a clean and interactive HTML report.

## CI/CD Integration
You can integrate this project with CI/CD pipelines using tools like GitHub Actions, Jenkins, or GitLab CI. Example GitHub Actions workflow:
```yaml
name: Cypress Tests

on:
  push:
    branches:
      - main

jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16

      - name: Install dependencies
        run: npm install

      - name: Run Cypress tests
        run: npx cypress run
```


## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact
For any questions or feedback, you can reach out to [shoheb59](https://github.com/shoheb59).