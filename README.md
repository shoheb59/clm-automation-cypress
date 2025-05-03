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