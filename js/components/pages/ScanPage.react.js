import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ScanPage extends Component {
  render() {
    return (
      <div>
        <h1>Scan Page</h1>
        <Link className="btn" to="/">Home</Link>
      </div>
    );
  }
}
