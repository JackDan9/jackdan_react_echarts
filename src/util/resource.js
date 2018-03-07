import axios from "axios"
import { TOKEN, RETOKEN, REMEMBERME } from "../constants/storage"
import loading from "./loading"

let loadingLayer = loading()
/*
 *   封装axios get, post, delete, put 方法, 可配置是否有缓冲
 * */
var resource = {
  count: 0,
  timer: null,
  isOpen: true,
  width: 0, // 顶部加载进度条宽度
  post: function(uri, params, isLoading) {
    return this.send(uri, params, "post", isLoading)
  },

  // 删除数据
  delete: function(uri, isLoading) {
    return this.send(uri, null, "delete", isLoading)
  },

  // 更新数据
  put: function(uri, params, isLoading) {
    return this.send(uri, params, "put", isLoading)
  },

  // 获取数据
  get: function(uri, isLoading) {
    return this.send(uri, null, "get", isLoading)
  },
  open: function() {
    // this.isOpen = true;
  },
  close: function() {
    // this.isOpen = false;
  },

  send: function(uri, params, method, isLoading) {
    if (!(isLoading === false) && ++this.count === 1) {
      clearInterval(this.timer)
      if (this.width < 80) {
        this.timer = setInterval(() => {
          this.width += 1
          loadingLayer.style.width = this.width + "%"
          if (this.width >= 80) {
            clearInterval(this.timer)
          }
        }, 30)
      }
    }

    switch (method) {
      case "post":
        return axios.post(uri, params).then(res => {
          this.isStop(isLoading)
          return res.data
        })
      case "delete":
        return axios.delete(uri).then(res => {
          this.isStop(isLoading)
          return res.data
        })
      case "put":
        return axios.put(uri, params).then(res => {
          this.isStop(isLoading)
          return res.data
        })
      case "get":
        return axios.get(uri).then(res => {
          this.isStop(isLoading)
          return res.data
        })
    }
  },

  isStop: function(isLoading) {
    if (!(isLoading === false) && --this.count === 0) {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.width += 5
        loadingLayer.style.width = this.width + "%"
        if (this.width >= 110) {
          clearInterval(this.timer)
          this.width = 0
          loadingLayer.style.width = 0
        }
      }, 20)
    }
  }
}

// axios.defaults.baseURL = 'http://192.168.1.169:7087';

// 请求拦截器
axios.interceptors.request.use(
  function(config) {
    config.headers.token = sessionStorage.getItem(TOKEN)
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  function(response) {
    switch (response.status) {
      case 401:
        // if(localStorage.getItem(REMEMBERME))
        // {
        //     resource.post('/support-user/security/retoken',{
        //         retoken: localStorage.getItem(RETOKEN)
        //     }).then((res) => {
        //         if(res.status === 401)
        //         {
        //             hashHistory.push('/login');
        //         }
        //     });
        // }else{
        //     hashHistory.push('/login');
        // }
        break
      case 500:
        break
    }
    return response
  },
  function(error) {
    if(error.status === 401 || error.status === 403){
      sessionStorage.removeItem(TOKEN);
      createHashHistory().push('/login');
    }

    if (resource.timer) {
      resource.isStop(true)
    }

    return Promise.reject(error)
  }
)

export default resource
