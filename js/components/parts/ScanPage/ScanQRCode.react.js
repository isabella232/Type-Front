import React, { Component } from 'react'

import QRCode from  '../QRCode.react'

export default class ScanQRCode extends Component {
  render() {
    return (
      <div className="qrcode">
        <QRCode />
        <strong>Scan to start typing</strong>
      </div>
    )
  }
}
