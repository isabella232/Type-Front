import React, { Component } from 'react'

import Grid from  './Grid.react'

export default class GridsList extends Component {
  render() {
    let dispatch = this.props.dispatch
    let gridNodes = this.props.data.map((grid) => {
      return (
        <Grid
          key={grid.id}
          id={grid.id}
          title={grid.title}
          content={grid.content}
          withImage={grid.withImage}
          history={this.props.history}
          dispatch={dispatch}
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
