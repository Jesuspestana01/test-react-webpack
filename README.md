
# Webpack and React Boilerplate

This boilerplate was created using Webpack. Can be use to create a React
Application.


## Deployment

To deploy this project run you first will need to install dependencies:

```bash
  npm i
```
Then, run the following script to run Webpack Dev Server with Live Reload:

```bash
npm run init
```
##

There's a `.env.example` file on the boilerplate. It is not needed to run 
the project, although it can be used for creating enviroment variables
for the project:

```
# REST API who gaves information about Harry Potter universe.

API_URL = "https://fedeperin-harry-potter-api.herokuapp.com/"


```

Environment variables can be accessed as follows:

```
const API = process.env.API_URL
```
