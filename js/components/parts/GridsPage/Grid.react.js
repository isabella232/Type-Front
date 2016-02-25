import React, { Component } from 'react'

import { openListSingleView } from '../../../actions/AppActions'

import Pic from '../../../../img/pic.png'

export default class Grid extends Component {
  openGridEdit(grid) {
    //this.props.history.pushState(null, '/grid/' + id)
    this.props.dispatch(openListSingleView(grid))
  }

  render() {
    let grid = this.props
    let withImageFlag = this.props.withImage ? 'with-image' : 'without-image'
    let contentEmptyFlag = this.props.content.length ? '' : 'empty'

    return (
      <div
        className={contentEmptyFlag + " grid"}
        onClick={this.openGridEdit.bind(this, grid)}
      >
        <h3>{grid.title}</h3>
        <p>
          {grid.content.split('\n').map((line, index) => {
            return (
              <span key={index}>
                {line}
                <br />
              </span>
            )
          })}
        </p>
        <span className={withImageFlag}>
          <img src={Pic} />
        </span>
      </div>
    )
  }
}
