import React, { Component } from 'react'

import { openListSingleView } from '../../../actions/AppActions'

import Pic from '../../../../img/pic.png'

export default class Grid extends Component {
  openGridEdit(gridId) {
    this.props.dispatch(openListSingleView(gridId))
  }

  render() {
    let grid = this.props
    let withImageFlag = [this.props.photo_url].join('').length ? 'with-image' : 'without-image'
    let contentEmptyFlag = [this.props.content].join('').length ? '' : 'empty '

    return (
      <div
        className={contentEmptyFlag + "grid"}
        onClick={this.openGridEdit.bind(this, grid.id)}
        title={grid.title}
      >
        <h3>{grid.title}</h3>
        <p>
          {[grid.content].join('').split('\n').map((line, index) => {
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
