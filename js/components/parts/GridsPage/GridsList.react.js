import React, { Component } from 'react'

import Grid from  './Grid.react'

export default class GridsList extends Component {
  render() {
    let gridNodes = this.props.data.map((grid) => {
      return (
        <Grid
          key={grid.id}
          id={grid.id}
          title={grid.title}
          content={grid.content}
          withImage={grid.withImage}
          history={this.props.history}
        />
      )
    })

    return (
      <div className="gridlist">
        {gridNodes}
      </div>
    )
  }
}
