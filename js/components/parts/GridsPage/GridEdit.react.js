import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { closeListSingleView, updateGridContent } from '../../../actions/AppActions'

import Back from '../../../../img/back.png'

class GridEdit extends Component {
  backToList(e) {
    e.preventDefault()
    this.props.dispatch(closeListSingleView())
  }

  updateGridContent(e) {
    this.props.dispatch(updateGridContent(e.target.value))
  }

  render() {
    let grid = this.props.data.gridsReducer.currentEditGrid
    console.log(grid)

    return (
      <div className="gridedit">
        <div className="gridedit--header">
          <a href='#' onClick={(e) => this.backToList(e)}>
            <img src={Back} />
            Back
          </a>
        </div>
        <main>
          <h1>{grid.title}</h1>
          <textarea value={grid.content} onChange={(e) => this.updateGridContent(e)}></textarea>
        </main>
        <div className="gridedit--footer">
          <Link to='1'>Prev</Link>
          <Link to='2'>Next</Link>
        </div>
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
export default connect(select)(GridEdit)
