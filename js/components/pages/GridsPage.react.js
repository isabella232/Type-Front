import { asyncChangeProjectName, asyncChangeOwnerName } from '../../actions/AppActions'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import GridsList from '../parts/GridsPage/GridsList.react.js'
import GridEdit from '../parts/GridsPage/GridEdit.react.js'
import ImportGridsButton from '../parts/GridsPage/ImportGridsButton.react.js'
import ImportGridsPopup from '../parts/GridsPage/ImportGridsPopup.react.js'

import Logo from '../../../img/logo-black.png'

class GridsPage extends Component {
  render() {
    return (
      <div className="page__grids">
        <header>
          <div className="logo">
            <img src={Logo} />
          </div>
          <h1>1989-11-20</h1>
          <ImportGridsButton />
        </header>

        <GridsList
          data={this.props.data.gridsReducer.grids}
          dispatch={this.props.dispatch}
        />

        <ReactCSSTransitionGroup
          component="div"
          transitionName="edit"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <GridEdit
            grids={this.props.data.gridsReducer.grids}
            dispatch={this.props.dispatch}
            gridId={this.props.data.gridsReducer.currentEditGridId}
            key={this.props.data.gridsReducer.currentEditGridId}
            showEdit={this.props.data.gridsReducer.showEdit}
          />
        </ReactCSSTransitionGroup>

        <ImportGridsPopup {...this.props} />
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
