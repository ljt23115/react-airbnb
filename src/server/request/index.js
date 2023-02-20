import axios from "axios";

import { BASE_URL, TIME_OUT } from "./config";

class AxRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    this.instance.interceptors.response.use((res) => {
      return res.data
    }, err => err)
  }

  request(config) {
    return this.instance.request(config)
  }
  get(config) {
    return this.request({ ...config, method: "GET" })
  }
  post(config) {
    return this.request({ ...config, method: "POST" })
  }
}

export default new AxRequest(BASE_URL, TIME_OUT)