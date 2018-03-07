import React from "react"
import { inject, observer } from "mobx-react"
import { Redirect } from "react-router-dom"

const RequireLogin = Component => props => {
  @inject("userStore")
  @observer
  class AuthContainer extends React.PureComponent {
    render() {
      const { userStore } = this.props
      return (
        <div>
          {userStore.isLogin ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )}
        </div>
      )
    }
  }

  return <AuthContainer />
}

export default RequireLogin
