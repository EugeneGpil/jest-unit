import Lodash from './02_sync'

describe('Lodash: compact', () => {

  const _ = new Lodash()

  test('should be definded', () => {
    expect(_.compact).toBeDefined()
    expect(_.compact).not.toBeUndefined()
  })

  test('should remove falsy values from array', () => {
    
  })

})