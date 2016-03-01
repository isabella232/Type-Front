import React, { Component } from 'react'
import { connect } from 'react-redux'

import { closeListSingleView, asyncUpdateGridContent } from '../../../actions/AppActions'

import GridEditPrevAndNext from './GridEditPrevAndNext.react'

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
    var currentGridsSet = {
      prev: {},
      current: {},
      next: {}
    }

    this.props.grids.forEach((grid, index) => {
      if (grid.id == this.props.gridId) {
        currentGridsSet.current = grid
        if (index > 0) {
          currentGridsSet.prev = this.props.grids[index-1]
        }
        if (index < this.props.grids.length - 1) {
          currentGridsSet.next = this.props.grids[index+1]
        }
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
          <h1 title={currentGridsSet.current.title}>{currentGridsSet.current.title}</h1>

          <div className="gridedit--typearea--cont">
            <textarea
              value={currentGridsSet.current.content}
              onChange={(e) => this.updateGridContent(e, currentGridsSet.current.id)}
              ref={(t) => this._textarea = t}
            ></textarea>
          </div>
        </div>
        <GridEditPrevAndNext dataset={currentGridsSet} dispatch={this.props.dispatch} />
      </div>
    )
  }

  componentDidMount() {
    setTimeout(() => {
      this._textarea.focus()
    }, 1)
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
