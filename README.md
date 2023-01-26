# cypress-test

This is an initial project to learn and understand how to implement end to end tests with cypress for web application. In this project is being used Page Object Pattern with elements separated from the page behavior (index.js and elements.js). There are custom commands using UI and soon will have application actions using API.

## How to open cypress for the project
npm run cy:open

## How to run cypress headless
npm run cy:run

## Parameters
CYPRESS_baseUrl - change the default test URL

CYPRESS_customer - change the default customer
### For example
```JavsScript
CYPRESS_baseUrl="https://localhost:8080/" CYPRESS_customer="dae" npm run cy:open
```
