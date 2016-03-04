import React, { Component } from 'react'

import { readyImportDiaries,
          updateServerData } from '../../../actions/AppActions'

export default class ImportGridsButton extends Component {
  readyToImport(e) {
    e.preventDefault()
    let diaryURL = `/diaries/${this.props.data.gridsSet.id}`
    let gridsData = {
      grids_attributes: {}
    }
    let grids = this.props.data.gridsSet.grids
    grids.forEach((grid, index) => {
      gridsData.grids_attributes[index] = grid
    })

    this.props.dispatch(updateServerData(diaryURL, gridsData))

    /*
    $.ajax
      url: "/diaries/" + $("#header").attr("data-id")
      dataType: "json"
      method: "PATCH"
      data: app.data
      success: (diary, textStatus, jqXHR) ->
        # show qr code image
        $("#qr-holder").html('')
        $("#qr-holder").qrcode
          render: "image"
          ecLevel: "L"
          size: 200
          text: "GridDiary:Import:#{diary.date}:#{window.location.origin}/diaries/#{diary.id}"
          */

  }

  render() {
    return (
      <a href="#" onClick={ e => this.readyToImport(e) }>Done</a>
    )
  }
}
