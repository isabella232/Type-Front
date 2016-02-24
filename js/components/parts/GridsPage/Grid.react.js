import React, { Component } from 'react'

import Pic from '../../../../img/pic.png'

export default class Grid extends Component {
  render() {
    let withImageFlag = this.props.withImage ? 'with-image' : 'without-image'
    let contentEmptyFlag = this.props.content.length ? '' : 'empty'
    return (
      <div className={ contentEmptyFlag + " grid"}>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <span className={withImageFlag}>
          <img src={Pic} />
        </span>
      </div>
    )
  }
}
