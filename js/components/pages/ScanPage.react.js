import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import ScanHelpButton from '../parts/ScanPage/ScanHelpButton.react'
import ScanHelpInfomation from '../parts/ScanPage/ScanHelpInformation.react'
import ScanQRCode from '../parts/ScanPage/ScanQRCode.react'

import Logo from '../../../img/logo.png'

class ScanPage extends Component {
  render() {
    console.log(this.props.data)
    return (
      <div className="page__scan">
        <div className="video">
        </div>
        <div className="page__content">
          <div className="logo">
            <img src={Logo} />
          </div>

          <ScanQRCode {...this.props} />

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
