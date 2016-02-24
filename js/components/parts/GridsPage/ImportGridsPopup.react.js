import React, { Component } from 'react'
import { connect } from 'react-redux'

import { cancelImportDiaries } from '../../../actions/AppActions'

import Close from '../../../../img/close.png'

export default class ImportGridsPopup extends Component {
  closePopup(e) {
    e.preventDefault()
    this.props.dispatch(cancelImportDiaries())
  }

  render() {
    let show = this.props.data.gridsReducer.showPopup ? 'mask--show' : 'mask--hide'
    return (
      <div className={ show + ' mask'}>
        <div className="mask__bg" onClick={ e => this.closePopup(e) }></div>
        <div className="mask__content">
          <b>
            This is the Grids POPUP.
          </b>
          <a href="#" onClick={ e => this.closePopup(e) }>
            <img src={Close} />
          </a>
        </div>
      </div>
    )
  }
}
