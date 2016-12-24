/**
Action for location, handle api and various action for ui
**/

import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const INVALIDATE_WEATHER = 'INVALIDATE_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

const APP_ID = 'b3fb347d134f1ba53654aa6b7644247e';

const API_URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';

function requestWeather(location){
    return {
        type: REQUEST_WEATHER,
        location: location
    }
}

function reciveWeather(location, weather){
    return {
        type: RECEIVE_WEATHER,
        weather: weather
    }
}

function error(location, error){
    return {
        type: INVALIDATE_WEATHER,
        error: error
    }
}

export function setLocation(city, country){

  return dispatch => {
    dispatch(requestWeather(location))
    return fetch(`${API_URL}?q=${city},${country}&units=metric&cnt=5&appid=${APP_ID}`)
        .then(response => response.json())
        .then(json => {
            if(json.cod == 200){
                dispatch(reciveWeather(location, json))
            } else {
                dispatch(error(location, json))
            }
        })
  }
}
