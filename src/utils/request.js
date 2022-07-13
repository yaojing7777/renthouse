import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://liufusong.top:8080'
})

export default instance
