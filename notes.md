# Learning Javascript, 3rd Edition - Ethan Brown

# npm
`npm init`
`npm install xx --save`
`npm install xx --saveDev`
`npm install xx --save-dev`
`npm install -g gulp` //-g = globally

# gulp
`gulp`

# babel
`npm install --save-dev babel-preset-es2015`
`npm install --save-dev gulp-babel`
`npm install --save-dev babel-core`

# ESLint
`npm install -g eslint`
`npm install --save-dev gulp-eslint`

# Mocha
`npm install --save-dev mocha`
`mocha -R spec fileName`
`mocha -R landing fileName`
add entry to package.json -> 
```json
"scripts": {
    "test": "mocha es6/pluralsight/intro2node/testing/mocha.js"
  }
```
now you can run with `npm run test`