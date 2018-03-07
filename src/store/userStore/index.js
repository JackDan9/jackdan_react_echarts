import { observable, action, computed, autorun } from 'mobx'
import { TOKEN, ROLES, USER } from 'constants/storage'
import resource from 'util/resource'
import { uploadImage } from 'actions/upload'
import { setInterval } from 'timers'

function isOwnEmpty(obj) {
  for (var name in obj) {
    if (obj.hasOwnProperty(name)) {
      return false //返回false，不为空对象
    }
  }
  return true //返回true，为空对象
}

class UserStore {
  @observable userInfo = null

  @observable messageNum = 0

  constructor() {
    this.userInfo = JSON.parse(sessionStorage.getItem(USER)) || {}
    this.timer = null

    autorun(() => {
      if (this.isLogin) {
        if (this.timer) {
          return
        }
        this.timer = setInterval(() => {
          resource.get('/woodpecker-puser/message/messageConut').then(res => {
            if (res.status === 200) {
              const num = parseInt(res.data.data)
              this.messageNum = num > 99 ? '99+' : num
            }
          })
        }, 1e3 * 10)
      } else {
        clearInterval(this.timer)
        this.timer = null
      }
    })
  }

  @computed
  get isLogin() {
    return !isOwnEmpty(this.userInfo)
  }

  @action
  saveUserInfo() {
    sessionStorage.setItem(USER, JSON.stringify(this.userInfo))
  }

  @action
  clearUserInfo() {
    clearInterval(this.timer)
    this.userInfo = {}
    sessionStorage.removeItem(TOKEN)
    sessionStorage.removeItem(ROLES)
    sessionStorage.removeItem(USER)
  }

  // 修改用户头像
  @action
  changeHead(file) {
    return uploadImage(file).then(res => {
      return resource
        .post('/woodpecker-puser/userCenter/headChange', {
          headurl: res.data
        })
        .then(result => {
          this.userInfo.headurl = res.data

          this.saveUserInfo()

          return result
        })
        .catch(e => {
          throw new Error('修改图片失败')
        })
    })
  }

  // 修改手机号
  @action
  changePhone({ phone, password, code }) {
    return resource
      .post('/woodpecker-puser/userCenter/phoneChange', {
        password: password,
        phone: phone,
        phoneCode: code
      })
      .then(res => {
        if (res.status !== 200) {
          return Promise.reject(new Error(res.message))
        }
        return res
      })
      .then(res => {
        this.userInfo.phone = phone

        this.saveUserInfo()

        return res
      })
      .catch(err => {
        if (err.response) {
          throw new Error(err.response.data.message)
        } else {
          throw err
        }
      })
  }

  // 修改密码
  changePassword({ oldPassword, newPassword, newPasswordRepeat }) {
    return resource
      .post('/woodpecker-puser/password/change', {
        oldpassword: oldPassword,
        newpassword: newPassword,
        repassword: newPasswordRepeat
      })
      .then(res => {
        if (res.status !== 200) {
          return Promise.reject(new Error(res.message))
        }
      })
      .catch(err => {
        if (err.response) {
          throw new Error(err.response.data.message)
        } else if (err instanceof Error) {
          throw err
        } else {
          throw new Error('修改密码失败')
        }
      })
  }
}

const userStore = new UserStore()

export { UserStore }

export default userStore
