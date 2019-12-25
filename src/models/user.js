import { LoginFunc } from '../service/user'

export default {
  namespace: 'user', //  全局state上的key
  state: {
    message: ''
  }, // init state初始值
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        message: payload
      }
    }
  }, // 等同于redux里的reducer，接受action，同步更新state
  effects: {
    *login({ payload, callback }, { put, call }) {
      const res = yield call(LoginFunc, payload)
      if(res) {
        yield put({
          type: 'save',
          payload: res,
        })
        callback()
      }
    }
  },
  subscriptions: {} // 用户订阅数据
}
