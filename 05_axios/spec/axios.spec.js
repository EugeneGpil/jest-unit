// import { dafault as axios} from 'axios'
import axios from 'axios'
import Axios from '../axios'
import { postsJson } from './posts'

jest.mock('axios')

describe('Axios.get:', () => {

  let response
  let posts

  beforeEach(() => {
    posts = JSON.parse(postsJson)

    response = {
      data: posts
    }
  })

  test('should return data from backend', async () => {
    axios.get.mockReturnValue(response)
    const axiosRespnose = await Axios.get()
    expect(axiosRespnose).toEqual(posts)
  })
})