import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { updateGridContent } from '../../actions/AppActions'

import Back from '../../../img/back.png'

export default class GridPage extends Component {
  updateGridContent(e) {
    console.log(e.target.value)
    this.props.dispatch(updateGridContent())
  }

  render() {
    let gridId = this.props.params.id
    let grid = this.props.data.gridsReducer.grids[gridId]

    return (
      <div className="page__grid">
        <header>
          <Link to='/grids'>
            <img src={Back} />
            Back
          </Link>
        </header>
        <main>
          <h1>{grid.title}</h1>
          <textarea defaultValue={grid.content} onChange={(e) => this.updateGridContent(e)}></textarea>
        </main>
        <footer>
          <Link to='1'>Prev</Link>
          <Link to='2'>Next</Link>
        </footer>
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
export default connect(select)(GridPage)
