# Elaborate Snickerdoodle

Home to the most takled about articles on the web

## Table of contents

- [About](#-about)
- [Hosted version](#-hosted-version)
- [Pre-requsites](#-pre-requsites)
- [Getting started](#-getting-started)

## 🚀 About

A small app where you can view a list of articles from the world of Football, Cooking and Coding. Find an article that interests you and view it to leave a comment or up/down vote it.

## 📝 Hosted version

Currently the [backend service](https://github.com/richfrick/news-app) supporting this is hosted on a free version of render which tears down after 15 mins on inactivity, so hitting this for the first time could take up to 50s to respond as the service spins back up.

https://elaborate-snickerdoodle-8745b3.netlify.app/

## 📚 Pre-requsites

Min Versions

- [node v20 or above](https://nodejs.org/api/https.html) (build on v23.3.0)

## 📚 Getting started

In order to use this you will need define environment variables for connecting to the test and development databases we'll cover in the steps below. The rest of the setup will make use of pre-defined scripts.

1. Clone the repo

   `git clone https://github.com/richfrick/news-app-ui.git`

2. in you chosen terminal cd into the root of

   `news-app-ui`

3. Install dependencies

   `npm install`

4. Start the app by running

   `npm run dev`

5. By default vite will run the app on `http://localhost:5173/` if it is free but the teminal will tell you the port it has been opened on.

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)
