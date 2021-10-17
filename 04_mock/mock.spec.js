import {map} from './mock'

describe('map:', () => {

  let array
  let fn

  beforeEach(() => {
    array = [1, 2, 3, 5]
    fn = jest.fn(x => x ** 2) // x => x * x
  })

  test('should call callback', () => {
    map(array, fn)
    expect(fn).toBeCalled()
    expect(fn).toBeCalledTimes(4)
  })

  test('shold call callback 4 times', () => {
    map(array, fn)
    expect(fn).toBeCalledTimes(4)
    expect(fn.mock.calls.length).toBe(4)
  })

  test('should call callback and get right results', () => {
    map(array, fn)
    expect(fn.mock.results[0].value).toBe(1) 
    expect(fn.mock.results[1].value).toBe(4) 
    expect(fn.mock.results[2].value).toBe(9) 
    expect(fn.mock.results[3].value).toBe(25) 
  })

  test('shold call callback and get right mocked result', () => {
    fn
      .mockReturnValueOnce(100)
      .mockReturnValueOnce(200)
      .mockReturnValue('x')
    map(array, fn)
    expect(fn.mock.results[0].value).toBe(100) 
    expect(fn.mock.results[1].value).toBe(200) 
    expect(fn.mock.results[2].value).toBe('x') 
    expect(fn.mock.results[3].value).toBe('x') 
  })
})