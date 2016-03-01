import React, { Component } from 'react'

//import { toggleScanHelpInformation, hideScanHelpInformation } from '../../../actions/AppActions'

//import Info from '../../../../img/info.png'

import qr from 'qr-image'

export default class ScanHelpButton extends Component {
  render() {
    var qr_png = qr.image('I love QR!', { type: 'png' })

    console.log(qr_png)

    return (
      <img src={qr_png} />
    )
  }
}
