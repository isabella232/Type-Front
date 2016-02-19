import React, { Component } from 'react'

export default class ScanHelpInformation extends Component {
  render() {
    let show = this.props.data.showInfo ? 'show' : 'hide'
    return (
      <div className={show}>
        <b>
          This is the ScanHelpInformation panel.
        </b>
      </div>
    )
  }
}
