import {
  REQUEST_WEATHER,
  INVALIDATE_WEATHER,
  RECEIVE_WEATHER
} from '../actions/location';

export default function location(state = {
  isFetching: false,
  didInvalidate: false,
  weathers: []
}, action){
  switch(action.type){
    case INVALIDATE_WEATHER:
      return Object.assign({}, state, {
        didInvalidate: true,
        error: action.error
      })
    case REQUEST_WEATHER: 
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_WEATHER:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        weather: action.weather
      })

    default:
      return state
  }
}