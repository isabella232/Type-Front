import React, { Component } from 'react'
import Faye from 'faye'
import fetch from 'isomorphic-fetch'

import QRCode from  '../QRCode.react'
import { generateScanQRCode,
          asyncDataInit } from '../../../actions/AppActions'
import { uuid } from '../../../utils/helpFuncs'
import { FAYE_SERVER_URL } from '../../../utils/helpConsts'

export default class ScanQRCode extends Component {
  render() {
    return (
      <div className="qrcode">
        <QRCode text={this.props.data.qrcodeText} />
        <strong>Scan to start typing</strong>
      </div>
    )
  }

  componentDidMount() {
    let channelID = uuid()
    let client = new Faye.Client(FAYE_SERVER_URL, {retry: 5})

    client.on('transport:down', () => {
      // dispatch the error message
    })

    client.on('transport:up', () => {
      let qrcodeText = `GridDiary:Type:${window.location.origin}/diaries?channel=${channelID}`
      console.log(qrcodeText)
      this.props.dispatch(generateScanQRCode(qrcodeText))
    })

    let subscription = client.subscribe(`/${channelID}`, (message) => {
      let success = message.success

      if (success) {
        this.props.dispatch(asyncDataInit(message.url))
      } else {
        // dispatch the error message
        alert('wrong')
      }
    })

    /*
    client.on 'transport:up', ->
      <% unless Rails.env.production? %>
      console.log("#{window.location.origin}/diaries?channel=#{channelID}")
      <% end %>
      # the client is online
      $('#type-body').html HandlebarsTemplates['diaries/new']()

      $('#type-body .panel-body-bg').hide()
      $('#type-body .panel-body-bg').qrcode({
        render: 'image'
        ecLevel: 'L'
        size: 200
        text: "GridDiary:Type:#{window.location.origin}/diaries?channel=#{channelID}"
      })
      $('#type-body .panel-body-bg').fadeIn(450)

    subscription = client.subscribe "/#{channelID}", (message) ->
      success = message.success

      if success
        $.getJSON message.url, (diary)->
          $('#editor').html HandlebarsTemplates['diaries/edit'](diary)
          subscription.cancel()
          window.app.init()
      else
        setConnectionStatus(message.errors)

    # private
    setConnectionStatus = (status) ->
      $('#type .panel-connection-info').remove()
      $('#type .panel-body').append HandlebarsTemplates['diaries/new/connection_problem'](
          message: status
        )
      $('#type .panel-connection-info').hide().fadeIn(450)
      $('#type .tips').fadeOut(250)
    */
  }
}
