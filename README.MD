
# My npm package

An npm package with random functions :)

## Installation

`npm i @donald.ma/utils`

## Stack
- [Node.js](https://nodejs.org/en/)
- [Typescript 2.0+](https://www.typescriptlang.org/)
- [Mocha](https://mochajs.org/)
- [Chai](http://www.chaijs.com/)
- [Axios](https://github.com/axios/axios)

## Functions

### isCurrency
```
const isCurrency = (str: string): boolean => {
  const cleanedString = str.trim().toUpperCase()
  const isCrypto = Constants.cryptocurrencies[cleanedString] ? true : false
  const isFiat = Constants.fiatCurrenciesData.includes(cleanedString)

  return isCrypto || isFiat
}

const isNumeric = (value: any): boolean => {
  return !isNaN(parseFloat(value)) && isFinite(value)
}

const jsonToQueryString = (json: object): string => {
  return Object.keys(json).filter((key) => json[key] !== undefined).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
  }).join('&')
}
```
