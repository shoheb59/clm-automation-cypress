# Contributing Guide — CLM Automation

This document describes conventions, PR process, test-writing guidance, and tips so reviewers and contributors stay productive.

## Quick PR checklist
- Create a branch named `feature/<short-description>` or `fix/<short-description>`.
- Include a short description of what the tests cover in the PR description.
- Ensure tests run locally: `npx cypress run --spec "path/to/spec"`.
- If you add or change fixtures, update or add a short note describing the fixture contents.

## Test naming & placement
- Place specs under `cypress/e2e/tests/<area>/` (e.g., `CLM`, `KONSHUB`).
- Filename pattern: `<featureName>.cy.js` (existing pattern in repo).
- Keep one feature per spec file where feasible. Small helper tests can be grouped.

## Page objects & helpers
- Keep page objects in `cypress/pages/` in subfolders matching the feature area.
- Page objects should expose clear methods, e.g.:

```js
// cypress/pages/loginPage.js
module.exports = {
  visit() { cy.visit('/login'); },
  login(username, password) { cy.get('#user').type(username); cy.get('#pass').type(password); cy.get('#loginBtn').click(); }
};
```

- Keep helpers shared in `cypress/support/helper/` and register reusable commands in `cypress/support/commands.js`.

## Fixtures & test data
- Use `cypress/fixtures/*.json` for stable data sets.
- Avoid hardcoding environment-specific credentials in fixtures — use CI secrets or environment variables.

## Local debugging workflow
1. Run `npx cypress open` and pick a spec to run interactively.
2. Add `debugger;` or `cy.log()` to inspect state.
3. Use `.only` on a single test to limit runs while developing.

## CI & pipeline
- Main branch triggers the workflow `.github/workflows/build.yml` which runs tests and generates the Allure report.
- If CI fails, download the uploaded `allure-report` artifact from the run to inspect failures.

## Commit messages
- Keep messages short: use present tense.
- Suggested pattern: `<area>: <short summary>` (e.g., `tests: add login test for new SSO flow`).

## Adding new dependencies
- Small utility dependencies are OK but prefer native JS or Cypress utilities.
- Update `package.json` and run `npm install --save-dev <pkg>` then commit `package-lock.json`.

## Review guidance for reviewers
- Confirm tests are stable and not flaky (run a few times locally if needed).
- Ensure new page objects/helpers are placed in appropriate folders and reused where applicable.

## Example: minimal test template

```js
// cypress/e2e/tests/CLM/example.cy.js
describe('Example feature', () => {
  before(() => {
    cy.fixture('loginData').as('login');
  });

  it('logs in and checks dashboard', function () {
    const creds = this.login.validUser;
    const login = require('../../pages/loginPage');
    login.visit();
    login.login(creds.username, creds.password);
    cy.contains('Dashboard').should('be.visible');
  });
});
```

## Troubleshooting flaky tests
- Add retries or increase command timeouts only after investigating the cause.
- Use network stubbing (`cy.intercept`) to isolate test from unstable backend if applicable.

## Where to get help
- Add a comment in the PR and request review from the owner.
- Keep the PR description focused: what changed, why, and how to run the tests locally.

Thank you for contributing! Following the guide keeps the test suite healthy and easier to maintain for everyone.
