import Constants from './utils/Constants'

export const isCurrency = (str: string): boolean => {
  const cleanedString = str.trim().toUpperCase()
  const isCrypto = Constants.cryptocurrencies[cleanedString] ? true : false
  const isFiat = Constants.fiatCurrenciesData.includes(cleanedString)

  return isCrypto || isFiat
}