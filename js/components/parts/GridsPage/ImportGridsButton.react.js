import React, { Component } from 'react'

import { readyImportDiaries } from '../../../actions/AppActions'

export default class ImportGridsButton extends Component {
  readyToImport(e) {
    e.preventDefault()
    this.props.dispatch(readyImportDiaries())
  }

  render() {
    return (
      <a href="#" onClick={ e => this.readyToImport(e) }>Done</a>
    )
  }
}
