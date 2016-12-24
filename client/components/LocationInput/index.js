
import React, { Component } from 'react'
import classnames from 'classnames'
import style from './style.css'

export default class LocationInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      text: this.props.text || ''
    }
  }

  handleSubmit(e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onLocation(text)
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  render() {
    
    return (
      <input className={style.new}
        type="text"
        autoFocus="true"
        placeholder={this.props.placeholder}
        value={this.state.text}
        onChange={::this.handleChange}
        onKeyDown={::this.handleSubmit} />
    )
  }
}
