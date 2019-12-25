import axios from 'axios'

export const post = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(res => {
      console.log(res)
      resolve(res)
    }).catch(err => {
      console.log(err)
      reject(err)
    })
  })
}

export const get = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.get(url, data).then(res => {
      if (res.data.success) {
        resolve(res.data.res)
      } else {
        reject(res)
      }
    }).catch(err => {
      console.log(err)
      reject(err)
    })
  })
}
