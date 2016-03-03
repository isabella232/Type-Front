import React, { Component } from 'react'

import qrcode from 'yaqrcode'

export default class ScanHelpButton extends Component {
  render() {
    let base64 = ''
    if (this.props.text) {
      base64 = qrcode(this.props.text, {size: 240})
    } else {
      base64 = qrcode('hello', {size: 240})
    }

    return (
      <img src={base64} />
    )
  }
}
