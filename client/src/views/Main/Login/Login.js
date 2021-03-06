import React, { PropTypes as T } from 'react'
import AuthService from '../../../utils/AuthService'

export class Login extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  componentWillMount() {
      fetch('/users', {
          'accept' : 'application/json'
      })
        .then(res => {
            console.log('willmount ', res);
        })
        .catch(res => {
            console.log('error: ', res);
        })
  }

  render() {
    const { auth } = this.props
    return (
      <div>
        <h2>Login</h2>
          <button onClick={auth.login.bind(this)}>Login</button>
      </div>
    )
  }
}

export default Login;
