import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './reset.css'
import styles from './styles.css'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      imageAvatar,
      imageBackground
    } = this.props

    return (
      // <div className={styles.container} style={{"background": `url(${imageBackground})`}}>
        <div className={styles.loginBox}>
            <img className={styles.imgAvatar} src={imageAvatar} alt="Avatar"/>
            <h1 className={styles.titleForm}>Login Form</h1>
            <form action="#">
                <label className={styles.labelInput} for="username-input">Username</label>
                <input className={styles.inputField} type="text" id="username-input" placeholder="Enter your username"/>

                <label className={styles.labelInput} for="password-input">Password</label>
                <input className={styles.inputField} type="password" id="password-input" placeholder="Enter your password"/>
                <input className={styles.btnSubmit} type="submit" value="Login" />
                <a href="#">Forget your password</a>
                <a href="#">Not have account</a>
            </form>

          </div>
        // </div>
      // <div className={styles.test}>
      //   Example Component: {text}
      // </div>
    )
  }
}
