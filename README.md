# Financial Remedy CCD End2End Journey Tests

## Purpose

This service is to help people to run End2End Journey Tests for Financial Remedy.

## Getting Started

### Prerequisites

Running the application requires the following tools to be installed in your environment:

  * [Node.js](https://nodejs.org/) v7.2.0 or later
  * [yarn](https://yarnpkg.com/)

### Running the application

Install dependencies by executing the following command:

 ```
$ yarn install
 ```

### Running the End To End tests for Consented & Contested Journeys

 ```
$ yarn consentedtest-e2e
$ yarn contestedtest-e2e
 ```

## Verification

### Eslint is included and will verify the config is properly formatted:

`$ yarn lint`