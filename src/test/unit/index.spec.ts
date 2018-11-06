import { assert } from 'chai'
import 'mocha'
import { LoggerService } from '../../services/LoggerService'
import { isCurrency, isNumeric } from '../..'
import jsonToQueryString from '../../utils/jsonToQueryString'

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

})