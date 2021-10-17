import Ajax from './async'

describe('Ajax echo:', () => {
  test('shold return value async', async () => {
    const data = 'some data'
    const res = await Ajax.echo(data)
    expect(res).toBe(data)
  })

  test('shold return value with promise', () => {
    const data = 'some data'
    return Ajax.echo(data)
      .then(res => {
        expect(res).toBe(data)
      })
  })

  test('should catch error with promise', () => {
    return Ajax.echo()
      .catch(error => {
        expect(error).toBeInstanceOf(Error)
      })
  })

  test('should catch error with async', async () => {
    try {
      await Ajax.echo()
      fail('error wasn\'t catched')
    } catch (e) {
      expect(e.message).toBe('error')
      return
    }
  })
})
