import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { closeListSingleView, asyncUpdateGridContent } from '../../../actions/AppActions'

import Back from '../../../../img/back.png'
import Prev from '../../../../img/prev.png'
import Next from '../../../../img/next.png'

class GridEdit extends Component {
  backToList(e) {
    e.preventDefault()
    this.props.dispatch(closeListSingleView())
  }

  updateGridContent(e, gridId) {
    this.props.dispatch(asyncUpdateGridContent(e.target.value, gridId))
  }

  render() {
    let currentGrid = {}
    this.props.grids.forEach((grid) => {
      if (grid.id == this.props.gridId) {
        currentGrid = grid
      }
    })

    let showEdit = this.props.showEdit ? 'show ' : ''

    return (
      <div className={showEdit + "gridedit"}>
        <div className="gridedit--header">
          <a href='#' onClick={(e) => this.backToList(e)}>
            <img src={Back} />
            Back
          </a>
        </div>
        <div className="gridedit--typearea">
          <h1 title={currentGrid.title}>{currentGrid.title}</h1>
          <textarea
            value={currentGrid.content}
            onChange={(e) => this.updateGridContent(e, currentGrid.id)}
            ref={(t) => this._textarea = t}
          ></textarea>
        </div>
        <div className="gridedit--footer">
          <Link to='1'>
            <img src={Prev} />
            Prev
          </Link>
          <Link to='2'>
            Next
            <img src={Next} />
          </Link>
        </div>
      </div>
    )
  }

  componentDidMount() {
    setTimeout(() => {
      this._textarea.focus()
    }, 10)
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
