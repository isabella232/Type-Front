import React, { Component } from 'react'

import Link from '../../../../img/link.png'

export default class ScanHelpInformation extends Component {
  render() {
    let show = this.props.data.scanReducer.showInfo ? 'info-panel--show' : 'info-panel--hide'
    return (
      <div className={show + ' info-panel'}>
        <strong>Instructions:</strong>
        <br />
        <br />
        <ol>
          <li>Download <a href="https://itunes.apple.com/app/id597077261?mt=8&ign-mpt=uo%3D4"><img src={Link} />Grid Diary</a> from App Store.</li>
          <li>Navigate to the date that you want to write on, tap the “More” button on the bottom right.</li>
          <li>Tap “Cloud Input”, please allow Grid Diary to access your camera if needed.</li>
          <li>Scan QR code on the start page to start writing.</li>
          <li>Tap “Done” on the top right when you finish writing.</li>
          <li>Your device will receive a notification to guide you import the diary back to Grid Diary. Alternatively you can scan the QR code on the finish screen to import the diary manually.</li>
        </ol>
        <br />
        <br />
        <strong>Note:</strong>
        <br />
        <br />
        Currently Grid Diary Type does not support for photo attachment and the editing of mood and weather.
      </div>
    )
  }
}
