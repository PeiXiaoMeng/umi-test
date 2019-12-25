import BaseScreen from '../BaseScreen'
import { connect } from 'dva'

@connect(({ user }) => ({
  user,
}))

class LoginScreen extends BaseScreen {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h2>Login Page</h2>
        <button onClick={() => {
          this.login()
        }}>登录</button>
      </div>
    );
  }

  /**
   * 登录
   */
  login() {
    const { dispatch } = this.props
    dispatch({
      type: 'user/login',
      callback: () => {
        this.locationPush('/home')
      }
    });
  }
}

export default LoginScreen
