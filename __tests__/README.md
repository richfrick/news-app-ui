# Functional Tests

## About

These tests use [React testing library](https://www.npmjs.com/package/@testing-library/react) and [Vitest](https://www.npmjs.com/package/vitest) as the test runner. Individual components are tested in isolation using [Mock Service Worker](https://github.com/mswjs/msw) listeners to provide fast feedback on changes without needing to start the server or connect to a backend service.

## What do these test?

These test the individual React components using a simulated dom

## How do they differ from E2E tests?

They do not need the UI & backend service to be running, and can quickly manipulate and examine components for fast feedback.

## 📝 How the tests work

1. Mock service worker has listeners (**tests** > mocks > handlers.js) which represent individual api calls that componenet(s) needs to render.

2. Using an extended version of React testing Library's render method (**tests** > test-utils > testing-library-utils.jsx) you can set the user context, route(s) or in the case componenets need to be rendered together you can supply multiple components and their routes.

3. Using locators elements can be interacted and asserted on.

## 📚 Setup & Running Tests

### 📚 Pre-requsites

Min Versions

- [node v20 or above](https://nodejs.org/api/https.html) (build on v23.3.0)
- [vitest v3 or above](https://www.npmjs.com/package/vitest) (tests written using 3.2.4)

### 📚 Running the tests

1. Functional/Unit tests

   `npm ci`

   `npm test`
