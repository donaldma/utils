import { assert } from 'chai'
import 'mocha'
import { LoggerService } from '../../services/LoggerService'
import jsonToQueryString from '../../utils/jsonToQueryString'
import getMonthNumber from '../../utils/getMonthNumber'
import isCurrency from '../../utils/isCurrency'
import isNumeric from '../../utils/isNumeric'

describe(LoggerService.newLine('functions test'), () => {
  it('provided a valid string isCurrency should return true or false', () => {
    const currencyTrue = isCurrency('BTC')
    const currencyFalse = isCurrency('dasdas')
    assert.equal(currencyTrue, true)
    assert.equal(currencyFalse, false)
  })

  it('provided a value isNumeric should return true or false', () => {
    const numbericTrue = isNumeric(5)
    const numbericFalse = isNumeric('dasdas')
    assert.equal(numbericTrue, true)
    assert.equal(numbericFalse, false)
  })

  it('provided a valid json jsonToQueryString should return a query string', () => {
    const json = {
      a: 'a',
      b: 'b'
    }
    const expectedQueryString = 'a=a&b=b'
    assert.equal(jsonToQueryString(json), expectedQueryString)
  })

  it('provided a valid month string getMonthNumber should return the corresponding month number', () => {
    const testCase1 = 'september'
    const testCase2 = 'sep'
    const testCase3 = 'sep.'
    const testCase4 = 'sept'
    const testCase5 = 'sept.'
    const testCase6 = 'Septemeber'
    const testCase7 = 'SePtEmBER'
    const testCase8 = 'SePtE1209sxclmBER'
    const testCase9 = '08390128309821'

    assert.equal(getMonthNumber(testCase1), 9)
    assert.equal(getMonthNumber(testCase2), 9)
    assert.equal(getMonthNumber(testCase3), 9)
    assert.equal(getMonthNumber(testCase4), 9)
    assert.equal(getMonthNumber(testCase5), 9)
    assert.equal(getMonthNumber(testCase6), 9)
    assert.equal(getMonthNumber(testCase7), 9)
    assert.equal(getMonthNumber(testCase8), 9)
    assert.equal(getMonthNumber(testCase9), -1)
  })
})
