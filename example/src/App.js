import React, { Component } from 'react'

import ExampleComponent from 'create-react-library-masspa'
import imageAvatar from './img/avatar-image.png'
import imageBackground from './img/background.jpg'
import styles from './index.css'
export default class App extends Component {
  render () {
    return (
      <div className='root'>
        <ExampleComponent imageAvatar={imageAvatar} imageBackground={imageBackground}/>
      </div>
    )
  }
}
