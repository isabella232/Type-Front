import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { toggleScanHelpInformation, hideScanHelpInformation } from '../../actions/AppActions'

import ScanHelpInfomation from '../parts/ScanPage/ScanHelpInformation.react.js'
import ScanQRCode from '../parts/ScanPage/ScanQRCode.react.js'

class ScanPage extends Component {
  handleClick(e) {
    e.preventDefault()
    this.props.dispatch(toggleScanHelpInformation())
    console.log(this.props.data)
  }

  render() {
    return (
      <div className="page__scan">
        <h1>Scan Page</h1>

        <ScanQRCode />

        <a href="#" onClick={ e => this.handleClick(e) }>Need Help</a>

        <ScanHelpInfomation data={ this.props.data.scanReducer } />

        <br />
        <br />
        <Link to="/grids">
          View grids
        </Link>
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
