class Lodash {
  compact(array) {
    return array.filter(value => value)
  }

  groupBy(array, prop) {
    return array.reduce((resObj, value) => {
      const propRes = typeof prop === 'function' ? prop(value) : value[prop]
      if (!resObj[propRes]) {
        resObj[propRes] = []
      }
      resObj[propRes].push(value)
      return resObj
    }, {})
  }
}

module.exports = Lodash
