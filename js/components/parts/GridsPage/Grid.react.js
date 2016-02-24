import React, { Component } from 'react'

import Pic from '../../../../img/pic.png'

export default class Grid extends Component {
  enterGridPage(id) {
    this.props.history.pushState(null, '/grid/' + id)
  }

  render() {
    let withImageFlag = this.props.withImage ? 'with-image' : 'without-image'
    let contentEmptyFlag = this.props.content.length ? '' : 'empty'

    return (
      <div
        className={contentEmptyFlag + " grid"}
        onClick={this.enterGridPage.bind(this, this.props.id)}
      >
        <h3>{this.props.title}</h3>
        <p>
          {this.props.content.split('\n').map((line, index) => {
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
