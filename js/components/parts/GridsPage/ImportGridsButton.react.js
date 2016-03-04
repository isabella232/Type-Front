import React, { Component } from 'react'

import { readyImportDiaries,
          updateServerData } from '../../../actions/AppActions'

export default class ImportGridsButton extends Component {
  readyToImport(e) {
    e.preventDefault()
    let diaryURL = `/diaries/${this.props.data.gridsSet.id}`
    let gridsData = {
      diary: {
        grids_attributes: []
      }
    }
    let grids = this.props.data.gridsSet.grids
    grids.forEach((grid) => {
      gridsData.diary.grids_attributes.push(grid)
    })

    this.props.dispatch(updateServerData(diaryURL, gridsData))
  }

  render() {
    return (
      <a href="#" onClick={ e => this.readyToImport(e) }>Done</a>
    )
  }
}
