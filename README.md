# inspirity
A serverless boilerplate with koa and PostgreSQL.

## Prepare
* Install serverless
  ```
  npm install -g serverless
  ```
* Restore npm packages
  ```
  npm install
  ```
* Install PostgreSQL database in your local or use PostgreSQL RDS on aws
* Run ./config/setup.sql on PostgreSQL database

## stack
* serverless framework + aws
* koa for rest api (router, logger, error handling)
* postgreSQL as database
* jest for unit testing
* superagent as HTTP client
* introduce multiple routers for modularity
* run on debug mode
* koa-body to support multipart, urlencoded and json request bodies
* boom for HTTP-friendly error objects
* eslint with standard for code qualities ([![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.co))
* prettier for code formatter 
* [serverless-webpack](https://github.com/serverless-heaven/serverless-webpack) to bundle lambda with webpack
  * build to dist foler: sls webpack
  * package to .serverless folder (zip): ```sls package```
  * run offline: ```sls offline```(the default "Watching for changes" doesn't work well)
  * deploy to aws: ```sls deploy```
* use babel to add support to ES6/ES7 javascript
* massivejs for postgres database access (may try Objection + Knex in the future)
* ajv for json schema validation (joi is a good choice as well but it's not serializable; schm is another good choice, but it's not follow a spec, has limitted features, and not that popular)
* koa-combine-routers to combine routes so the kao app simply adds the combined routes
* make massive-js work with aws lambda (NOTE: postgres on aws should allow lambda access by using VPC/database security group)
* use serverless variables to load different configurations based on stage: local, dev, staging, or production.
* use AWS Systems Manager (SSM) Parameter Store to store encrypted parameters
* use serverless-jest-plugin to use jest with serverless framework for unit testing
  ```
  sls invoke test [--stage stage] [--region region] [-f function]
  ```
* TODO: computed columns (e.g. full name), full text search, data schema and validation, DTO valication
* TODO: complete postman test scripts


NOTE:

In order to update serverless globally to avoid "serverless update check failed" error, run the following commands:
```
npm install -g try-thread-sleep
npm install -g serverless --ignore-scripts spawn-sync
```
