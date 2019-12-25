import BaseScreen from '../BaseScreen'
import MyHeader from '../../components/MyHeader/MyHeader'

class HomeScreen extends BaseScreen {
  render() {
    return (
      <div>
        <MyHeader />
        <h2>Home Page</h2>
        <p>个人信息</p>
        <button onClick={() => {
          this.locationReplace('/')
        }}>登出</button>
      </div>
    );
  }
}

export default HomeScreen
