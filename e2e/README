# End-To-End testing

## About

These tests use [Playwright](https://playwright.dev/) and perform user based end-to-end scenarios using a full stack app and real data and by default will run cross browser (firefox, chrome & safari) and make use or paralell execution.

## How do they differ from functional or unit tests?

They require the full app to be running and use real data. By defining a VITE_API_URL in your .env file you can point it to a local or hosted version of the app.

## 📝 How the tests work

1. Where required the tests will use fixtures [e.g tests resuiting a article](./fixtures/article.fixture.ts) to set up the data needed for the test

2. All tests are indemendent on each other so any failures will not impact other tests.

3. These tests use the task pattern rather than POM to allow for better scalling an more eadable spec files.

4. Using locators elements can be interacted and asserted on.

## 📚 Setup & Running Tests

### 📚 Pre-requsites

Min Versions

- [node v20 or above](https://nodejs.org/api/https.html) (built on v23.3.0)

### 📚 Running the tests

1. Ensure you have a UI and backed service running as per the instructions [here](./README) including the .env file

2. Install dependencies

   `npm ci`

3. Run tests

   `npm run test:e2e`
