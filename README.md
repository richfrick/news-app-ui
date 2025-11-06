# Elaborate Snickerdoodle

#### Staging

[![Staging Build](https://dev.azure.com/richardfrickleton/azure-news-app/_apis/build/status%2Frichfrick.news-app-ui-stg?branchName=refs%2Fpull%2F42%2Fmerge)](https://dev.azure.com/richardfrickleton/azure-news-app/_build/latest?definitionId=8&branchName=refs%2Fpull%2F42%2Fmerge)
[![Netlify Status](https://api.netlify.com/api/v1/badges/1b518e00-07e4-4d86-812d-6349742a5337/deploy-status?branch=main)](https://app.netlify.com/projects/elaborate-snickerdoodle-staging/deploys)

#### Production

[![Produdtion Build](https://dev.azure.com/richardfrickleton/azure-news-app/_apis/build/status%2Frichfrick.news-app-ui-prod?branchName=main)](https://dev.azure.com/richardfrickleton/azure-news-app/_build/latest?definitionId=9&branchName=main)
[![Prodduction Deployemnt](https://api.netlify.com/api/v1/badges/c783e5b6-54ef-48ec-9417-162b84c70e34/deploy-status?branch=main)](https://app.netlify.com/projects/elaborate-snickerdoodle-8745b3/deploys)

## Table of contents

- [About](#-about)
- [Hosted version](#-hosted-version)
- [Run app locally](#-local-version)
  - [Pre-requsites](#-pre-requsites)
  - [Setup](#-setup)
- [Testing](#-testing)
  - [Running The Tests](#-running-the-tests)

## About

Elaborate-Snickerdoodle is a small blogging app where you can view articles from the world of Football, Cooking and Coding. Find an article that interests you, view it, then be sure to leave a comment or up/down vote it.

## 📝 Hosted version

Currently the [backend service](https://github.com/richfrick/news-app) for this is hosted on a free version of render which tears down after 15 mins of inactivity, so hitting this for the first time could take up to 50s to respond as the service spins back up.

https://elaborate-snickerdoodle-8745b3.netlify.app/

## 📝 Local version

### 📚 Pre-requsites

Min Versions

- [node v20 or above](https://nodejs.org/api/https.html) (build on v23.3.0)
- [vitest v3 or above](https://www.npmjs.com/package/vitest) (tests written using 3.2.4)
- [news-app service will need to be running locally](https://github.com/richfrick/news-app)

### 📚 Setup

In order run this locally you will need an .env file we'll cover this in the steps below. The rest of the setup will make use of pre-defined scripts.

1. Clone the repo

   `git clone https://github.com/richfrick/news-app-ui.git`

2. in you chosen terminal cd into the root of news-app-ui and run

   `npm ci`

3. Create a .env.local file and add

   `BASE_URL=http://localhost:5173/`

   `VITE_API_URL=http://localhost:9090/api`

The local UI runs on port 5173 and this is used to run the e2e tests and the backend service runs locally on port 9090 and this will allow the UI to work with real data.

4. Start the UI

   `npm run dev`

The UI starts with hot reloading enabled to any changes you make will be reflected on save.

5. By default vite will run the app on `http://localhost:5173/` if it is free but the teminal will tell you the port it has been opened on.

## 📚 Testing

The app is covered by functional/unit tests that perform componenet level tests written using react-testing-library as well as a set of E2E tests that use playwright.

### 📚 Tests

[Functional/Unit tests](./__tests__/README.md)

[E2E tests (requires backend service to be running)](./e2e/README)
