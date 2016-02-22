import React, { Component } from 'react'
import { connect } from 'react-redux'

import { readyImportDiaries } from '../../../actions/AppActions'

class ImportGridsButton extends Component {
  readyToImport(e) {
    e.preventDefault()
    this.props.dispatch(readyImportDiaries())
  }

  render() {
    return (
      <div>
        <h3>
          Import Grids
          <br />
          <a href="#" onClick={ e => this.readyToImport(e) }>Done</a>
        </h3>
      </div>
    )
  }
}

function select(state) {
  return {
    data: state
  }
}

export default connect(select)(ImportGridsButton)
