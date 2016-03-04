import React, { Component } from 'react'

import { cancelImportDiaries } from '../../../actions/AppActions'

import QRCode from  '../QRCode.react'

import Close from '../../../../img/close.png'
import Tick from '../../../../img/import-tick.png'
import Cross from '../../../../img/import-cross.png'

export default class ImportGridsPopup extends Component {
  closePopup(e) {
    e.preventDefault()
    this.props.dispatch(cancelImportDiaries())
  }

  render() {
    let show = this.props.data.showPopup ? 'mask--show' : ''

    let import_success = (
      <div className={show + ' mask'}>
        <div className="mask__bg" onClick={(e) => this.closePopup(e)}></div>
        <div className="mask__content">
          <img src={Tick} />
          <strong>Well done!</strong>

          <div className="qrcont">
            <QRCode text={this.props.data.importQRcodeText} />
          </div>

          <p>Scan to import diaries to App</p>

          <a href="#" onClick={(e) => this.closePopup(e)}>
            <img src={Close} />
          </a>
        </div>
      </div>
    )

    let import_failed = (
      <div className={show + ' mask'}>
        <div className="mask__bg" onClick={(e) => this.closePopup(e)}></div>
        <div className="mask__content">
          <img src={Cross} />
          <strong>Oops!</strong>

          <p>Seems we got a little problem here, please try it later.</p>

          <a href="#" onClick={(e) => this.closePopup(e)}>
            <img src={Close} />
          </a>
        </div>
      </div>
    )

    if (this.props.data.importQRcodeText.length > 0) {
      return import_success
    } else {
      return import_failed
    }
  }
}
