import {AxiosHttpClient} from './axios-http-client'
import axios from 'axios'
import faker from 'faker'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Axios Http Client', () => {
  it('should call Axios with correct URL', async () => {
    const url = faker.internet.url()
    const sut = new AxiosHttpClient()
    await sut.post({url})
    expect(mockedAxios).toHaveBeenCalledWith(url)
  })
})
