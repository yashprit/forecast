
import React, { Component } from 'react'
import classnames from 'classnames'
import style from './style.css'

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

function processForecast(forecast){
  let date = new Date(forecast.dt*1000);
  return {
    day: days[date.getDay()],
    date: date.getDate(),
    month: month[date.getMonth()],
    tempMin: forecast.temp.min,
    tempMax: forecast.temp.max,
    pressure: forecast.pressure,
    humidity: forecast.humidity,
    description: forecast.weather.description,
    wind: forecast.speed
  }
}

export default class Weather extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {

    const {
      forecast
    } = this.props;
    
    const forecastDetail = processForecast(forecast);

    return (
      <li className={style.weatherBox}>
        <div className={style.weatherBlock}>
          <h3 className={style.headerlg}>{forecastDetail.day}</h3>
          <h4 className={style.headersm}>{forecastDetail.month} {forecastDetail.date}</h4>
          <div className={style.weatherIcon}><i className="fa fa-sun-o fa-5x" aria-hidden="true"></i></div>
          <div className={style.temp}>
            <span className={style.largeTemp}>
              {forecastDetail.tempMax}
              <span className={style.smallTemp}>/{forecastDetail.tempMin} &#8451;</span>
            </span>
          </div>
          <div className={style.description}>{forecastDetail.description}</div>
        </div>
        <div className={style.weatherBlock}>
          <ul className={style.stats}>
            <li><span>Wind Speed</span> {forecastDetail.wind}mps</li>
            <li><span>Humidity</span> {forecastDetail.humidity}%</li>
            <li><span>Pressure</span> {forecastDetail.pressure}hPa</li>
          </ul>
        </div>
      </li>
    )
  }
}
