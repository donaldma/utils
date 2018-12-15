import Constants from '../config/Constants'
import * as _ from 'lodash'

const getMatchPercent = (arr1: string[], arr2: string[]): number => {
  const matches = arr2.filter((word) => {
    return arr1.includes(word)
  }).length
  return (matches / arr2.length) * 100
}

const getMonthNumber = (val: string): number => {
  const cleanedVal = val.trim().toLowerCase()
  const match = Object.keys(Constants.monthDictionary).find((x) => Constants.monthDictionary[x].includes(cleanedVal))

  if (match) {
    return parseInt(match)
  }

  const goodNuff = Object.keys(Constants.monthDictionary)
    .map((x) => {
      const longMonthNameSplit = Constants.monthDictionary[x][0].split('')
      const cleanedValSplit = cleanedVal.split('')
      const matchPercent = getMatchPercent(cleanedValSplit, longMonthNameSplit)

      return {
        month: x,
        matchPercent
      }
    })
    .filter((x) => x.matchPercent > 80)

  if (goodNuff.length > 0) {
    const sorted = _.sortBy(goodNuff, 'matchPercent').reverse()
    if (goodNuff.filter((x) => x.matchPercent === 100).length > 1) {
      console.log(`Weird edge case: ${JSON.stringify(goodNuff.filter((x) => x.matchPercent === 100))}`)
    }

    return parseInt(sorted[0].month)
  }

  return -1
}

export default getMonthNumber
