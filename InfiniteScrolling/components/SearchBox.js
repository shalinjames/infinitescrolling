import React, { Component, PropTypes } from 'react'


export default class SearchBox extends Component {
  handleChange(event) {
    const text = event.target.value
      this.props.onSearch(text)
  }

  render() {
    return (
      <div className="input-group">
      <span className="input-group-addon" id="basic-addon1">{this.props.searchLabel}</span>
          <input type="text" ref="input" onInput={(e) => this.handleChange(e)} className="form-control" placeholder="Search Text" aria-describedby="basic-addon1" />
      </div>
    )
  }
}