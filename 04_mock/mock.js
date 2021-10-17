function map(array, callback) {
  const res = []
  for (let value of array) {
    res.push(callback(value))
  }
  return res
}

module.exports = {map}