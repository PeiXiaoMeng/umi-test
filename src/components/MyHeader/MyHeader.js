import React, { Component } from 'react'
import { connect } from 'dva'
import styles from './MyHeader.css'

@connect(({user}) => ({
  message: user.message
}))

class MyHeader extends Component {
  render() {
    console.log(this.props)
    const { message } = this.props
    return (
      <header className={styles.header}>
        <span>{ message }</span>
      </header>
    );
  }
}

export default MyHeader
