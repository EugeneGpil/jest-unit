import { sum, nativeNull } from './intro'

describe('Sum function:', () => {
  test('should return sum of two values', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(1, 2)).toEqual(3)
  })

  test('should return right value for comparison', () => {
    expect(sum(3, 4)).toBeGreaterThan(4)
    expect(sum(3, 4)).toBeGreaterThanOrEqual(4)
    expect(sum(3, 4)).toBeLessThan(10)
    expect(sum(4, 5)).toBeLessThanOrEqual(9)
  })

  test('should return sum of two float values', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
  })
})

describe('nativeNull function:', () => {
  test('should return null', () => {
    expect(nativeNull()).toBe(null)
    expect(nativeNull()).toBeNull()
    expect(nativeNull()).toBeFalsy()
    expect(nativeNull()).toBeDefined()
    expect(nativeNull()).not.toBeTruthy()
    expect(nativeNull()).not.toBeUndefined()
  })
})
