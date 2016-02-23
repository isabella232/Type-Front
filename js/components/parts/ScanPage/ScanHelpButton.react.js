import React, { Component } from 'react'

import { toggleScanHelpInformation, hideScanHelpInformation } from '../../../actions/AppActions'

import Info from '../../../../img/info.png'

export default class ScanHelpButton extends Component {
  toggleHelp(e) {
    e.preventDefault()
    this.props.dispatch(toggleScanHelpInformation())
  }

  render() {
    return (
      <a href="#" className="info-btn" onClick={ e => this.toggleHelp(e) }>
        <img src={Info} />
        Need help?
      </a>
    )
  }
}
