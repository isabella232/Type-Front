import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'


import ScanHelpButton from '../parts/ScanPage/ScanHelpButton.react'
import ScanHelpInfomation from '../parts/ScanPage/ScanHelpInformation.react'
import ScanQRCode from '../parts/ScanPage/ScanQRCode.react'

import Logo from '../../../img/logo.png'

class ScanPage extends Component {
  render() {
    return (
      <div className="page__scan">
        <div className="video">
          <iframe src="https://player.vimeo.com/video/104160696?background=1" autoplay="1" loop="1"></iframe>
        </div>
        <div className="page__content">
          <div className="logo">
            <img src={Logo} />
          </div>

          <ScanQRCode />

          <ScanHelpButton {...this.props} />
          <ScanHelpInfomation {...this.props} />
        </div>
      </div>
    )
  }
}

function select(state) {
  return {
    data: state
  }
}

export default connect(select)(ScanPage)
