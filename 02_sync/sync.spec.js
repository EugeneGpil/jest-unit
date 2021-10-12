import Lodash from './02_sync'

describe('Lodash: compact', () => {

  let _
  let array

  beforeAll(() => {
    // _ = new Lodash()
  })

  beforeEach(() => {
    _ = new Lodash()
    array = [false, 42, 0, '', true, null, 'hello', undefined]
  })

  afterAll(() => {
    //
  })

  afterEach(() => {
    //
  }) 

  test('should be definded', () => {
    expect(_.compact).toBeDefined()
    expect(_.compact).not.toBeUndefined()
  })

  test('should remove falsy values from array', () => {
    const res = [42, true, 'hello']
    expect(_.compact(array)).toStrictEqual(res)
  })

  test('should return array without falsy values', () => {
    expect(_.compact(array)).not.toContain(0)
    expect(_.compact(array)).not.toContain('')
    expect(_.compact(array)).not.toContain(null)
    expect(_.compact(array)).not.toContain(false)
    expect(_.compact(array)).not.toContain(undefined)
  })

})

describe('Lodash: groupBy', () => {

  let _

  beforeEach(() => {
    _ = new Lodash
  })

  test('should be definded', () => {
    expect(_.groupBy).toBeDefined()
    expect(_.groupBy).not.toBeUndefined()
  })

  test('should group array items by Math.floor', () => {
    const array = [2.2, 2.4, 4.2, 3.1]
    const res = {
      2: [2.2, 2.4],
      3: [3.1],
      4: [4.2]
    }
    expect(_.groupBy(array, Math.floor)).toStrictEqual(res)
  })

  test('should group array items by length', () => {
    const array = ['one', 'two', 'three']
    const res = {
      3: ['one', 'two'],
      5: ['three']
    }
    expect(_.groupBy(array, 'length')).toStrictEqual(res)
  })

  test('shold return not array', () => {
    const array = []
    expect(_.groupBy(array, Math.trunc)).not.toBeInstanceOf(Array)
  })
})
