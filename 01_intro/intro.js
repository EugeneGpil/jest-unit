const expect = (value) => {
  return {
    toBe: exp => {
      if (value === exp) {
        console.log('Success')
      } else {
        console.log(`Should be ${value}, but ${exp}`)
      }
    }
  }
}

const sum = (a, b) => a + b

const nativeNull = () => null

module.exports = {sum, nativeNull}

// expect(sum(1, 2)).toBe(3)
