
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'
import * as LocationActions from '../../actions/location'
import style from './style.css'

class App extends Component {
  render() {
    const { weather, actions, children, didInvalidate } = this.props

    const forecasts = weather? weather.list : [];

    return (
      <div className={style.normal}>
        <Header setLocation={actions.setLocation} />
        <MainSection forecasts={forecasts} actions={actions} didInvalidate={didInvalidate}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {isFetching, didInvalidate, weather} = state.location;

  return {
    isFetching: isFetching,
    didInvalidate: didInvalidate,
    weather: weather
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LocationActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
