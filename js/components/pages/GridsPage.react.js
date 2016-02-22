import { asyncChangeProjectName, asyncChangeOwnerName } from '../../actions/AppActions'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import GridsList from '../parts/GridsPage/GridsList.react.js'
import ImportGridsButton from '../parts/GridsPage/ImportGridsButton.react.js'
import ImportGridsPopup from '../parts/GridsPage/ImportGridsPopup.react.js'

class GridsPage extends Component {
  render() {
    return (
      <div className="page__grids">
        <h1>The Grids Page</h1>
        <GridsList />
        <ImportGridsButton />
        <ImportGridsPopup  {...this.props} />
      </div>
    )
  }
}

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(GridsPage)
