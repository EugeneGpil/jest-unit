import axios from "axios";

class Axios {
  static async get() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = Axios