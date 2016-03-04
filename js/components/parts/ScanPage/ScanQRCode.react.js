import React, { Component } from 'react'
import Faye from 'faye'
import fetch from 'isomorphic-fetch'

import QRCode from  '../QRCode.react'
import { generateScanQRCode,
          asyncDataInit } from '../../../actions/AppActions'
import { uuid } from '../../../utils/helpFuncs'
import { FAYE_SERVER_URL } from '../../../utils/helpConsts'

export default class ScanQRCode extends Component {
  render() {
    return (
      <div className="qrcode">
        <QRCode text={this.props.data.qrcodeText} />
        <strong>Scan to start typing</strong>
      </div>
    )
  }

  componentDidMount() {
    let channelID = uuid()
    let client = new Faye.Client(FAYE_SERVER_URL, {retry: 5})

    client.on('transport:down', () => {
      // TODO: dispatch the error message
    })

    client.on('transport:up', () => {
      let qrcodeText = `GridDiary:Type:${window.location.origin}/diaries?channel=${channelID}`
      console.log(qrcodeText)
      this.props.dispatch(generateScanQRCode(qrcodeText))
    })

    let subscription = client.subscribe(`/${channelID}`, (message) => {
      let success = message.success

      if (success) {
        this.props.dispatch(asyncDataInit(message.url, this.props.history))
      } else {
        // TODO: dispatch the error message
        alert('wrong')
      }
    })
  }
}
