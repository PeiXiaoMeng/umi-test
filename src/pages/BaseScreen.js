import { Component } from 'react'
import router from 'umi/router';

class BaseScreen extends Component {

  /****************************** Route相关 *************************************/

  locationPush(action) {
    router.push(action)
  }

  locationReplace(action) {
    router.replace(action)
  }

  locationGo(n) {
    router.go(n)
  }

  locationGoBack() {
    router.goBack()
  }

}

export default BaseScreen
