
import React, { Component } from 'react'
import LocationInput from '../LocationInput'

export default class Header extends Component {
  handleLocation(text) {
    if (text.length && text.indexOf(",") !== -1) {
      const location = text.split(",");
      this.props.setLocation(location[0], location[1]);
    }
  }

  render() {
    return (
      <header>
        <h1>Weather</h1>
        <LocationInput
          onLocation={::this.handleLocation}
          placeholder="city,country code e.g. Bangalore,IN" />
      </header>
    )
  }
}
