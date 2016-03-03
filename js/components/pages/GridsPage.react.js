import { asyncChangeProjectName, asyncChangeOwnerName } from '../../actions/AppActions'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import GridsList from '../parts/GridsPage/GridsList.react.js'
import GridEdit from '../parts/GridsPage/GridEdit.react.js'
import ImportGridsButton from '../parts/GridsPage/ImportGridsButton.react.js'
import ImportGridsPopup from '../parts/GridsPage/ImportGridsPopup.react.js'

import Logo from '../../../img/logo.png'

import { leaveAlert } from '../../utils/helpFuncs'

class GridsPage extends Component {
  render() {
    if (this.props.data.changeGrid) {
      var editTransitionName = 'change'
    } else {
      var editTransitionName = 'edit'
    }

    return (
      <div className="page__grids">
        <header>
          <div className="logo">
            <img src={Logo} />
          </div>
          <h1>1989-11-20</h1>
          <ImportGridsButton {...this.props} />
        </header>

        <GridsList {...this.props} />

        <ReactCSSTransitionGroup
          component="div"
          transitionName={editTransitionName}
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          <GridEdit
            grids={this.props.data.gridsSet.grids}
            dispatch={this.props.dispatch}
            gridId={this.props.data.currentEditGridId}
            key={this.props.data.currentEditGridId}
            showEdit={this.props.data.showEdit}
          />
        </ReactCSSTransitionGroup>

        <ImportGridsPopup {...this.props} />
      </div>
    )
  }

  componentDidMount() {
    leaveAlert()
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
