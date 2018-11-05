import { assert } from 'chai'
import 'mocha'
import { LoggerService } from '../../services/LoggerService'
import { isCurrency } from '../..'

describe(LoggerService.newLine('functions test'), () => {
  it('provided a valid string isCurrency should return true or false', () => {

    const currencyTrue = isCurrency('BTC')
    const currencyFalse = isCurrency('dasdas')
    assert.equal(currencyTrue, true)
    assert.equal(currencyFalse, false)
  })

})