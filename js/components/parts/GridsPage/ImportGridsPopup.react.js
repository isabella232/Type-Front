import React, { Component } from 'react'
import { connect } from 'react-redux'

import { cancelImportDiaries } from '../../../actions/AppActions'

export default class ImportGridsPopup extends Component {
  closePopup(e) {
    e.preventDefault()
    this.props.dispatch(cancelImportDiaries())
  }

  render() {
    let show = this.props.data.gridsReducer.showPopup ? 'show' : 'hide'
    return (
      <div className={show}>
        <b>
          This is the Grids POPUP.
        </b>
        <a href="#" onClick={ e => this.closePopup(e) }>Close</a>
      </div>
    )
  }
}
