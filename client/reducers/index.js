
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import location from './location'

export default combineReducers({
  routing,
  location
})
