import React, { Component } from 'react'
import { connect } from 'react-redux'

import { closeListSingleView, asyncUpdateGridContent } from '../../../actions/AppActions'

import Back from '../../../../img/back.png'
import Prev from '../../../../img/prev.png'
import Next from '../../../../img/next.png'

export default class GridEditPrevAndNext extends Component {
  render() {
    let data = this.props.dataset

    let all = (
      <div className="gridedit--footer">
        <a href="#" className="gridedit--prev">
          <img src={Prev} />
          <span>{data.prev.title}</span>
        </a>
        <a href="#" className="gridedit--next">
          <span>{data.next.title}</span>
          <img src={Next} />
        </a>
      </div>
    )

    let prev = (
      <div className="gridedit--footer">
        <a href="#" className="gridedit--prev">
          <img src={Prev} />
          <span>{data.prev.title}</span>
        </a>
      </div>
    )

    let next = (
      <div className="gridedit--footer">
        <a href="#" className="gridedit--next">
          <span>{data.next.title}</span>
          <img src={Next} />
        </a>
      </div>
    )

    if (data.prev.title && data.next.title) {
      return all
    } else {
      if (data.prev.title) {
        return prev
      } else {
        return next
      }
    }
  }
}
