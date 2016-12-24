
import React, { Component } from 'react'
import Weather from '../Weather'
import style from './style.css'

export default class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { forecasts, actions, didInvalidate} = this.props

    if(!didInvalidate) {
      var children = <ul className={style.normal}>
            {
              forecasts.map(forecast => <Weather forecast={forecast} {...actions} key={forecast.dt}/>)
            }
          </ul>
    } else {
      var children =  <div className={style.error}>Error occured while reading </div>
    }

    return <section className={style.main}>{children}</section>
  }
}
