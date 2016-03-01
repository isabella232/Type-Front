import React, { Component } from 'react'

import QRCode from  '../QRCode.react'

export default class ScanQRCode extends Component {
  render() {
    return (
      <div className="qrcode">
        <p>QRCODE</p>
        <QRCode />
      </div>
    )
  }
}
