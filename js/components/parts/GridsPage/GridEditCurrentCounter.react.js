import React, { Component } from 'react'

export default class GridEditCurrentCounter extends Component {
  render() {
    console.log(this.props)
    let gridsCount = this.props.grids.length;
    //let currentIndex = 
    let currentIndex = 0
    this.props.grids.forEach((grid, index) => {
      if (grid.id == this.props.gridId) {
        currentIndex = index + 1
      }
    })
    return (
      <div className="gridedit--current">
        <span>{currentIndex}</span>
        /
        <span>{gridsCount}</span>
      </div>
    )
  }
}
