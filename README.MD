
# My npm package

An npm package with random functions :)

## Installation

`npm i donaldma-npm`

## Stack
- [Node.js](https://nodejs.org/en/)
- [Typescript 2.0+](https://www.typescriptlang.org/)
- [Mocha](https://mochajs.org/)
- [Chai](http://www.chaijs.com/)
- [Axios](https://github.com/axios/axios)

## Functions

### isCurrency
```
export const isCurrency = (str) => {
  const cleanedString = str.trim().toUpperCase()
  const isCrypto = Constants.cryptocurrencies[cleanedString] ? true : false
  const isFiat = Constants.fiatCurrenciesData.includes(cleanedString)

  return isCrypto || isFiat
}
```