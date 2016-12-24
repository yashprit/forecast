
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import {render} from 'react-dom'
import React from 'react'

import App from './containers/App'
import configure from './store'

const store = configure()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
    	{/*for serving file using github pages*/}
      <Route path="*" component={App}>
      </Route>
    </Router>
  </Provider>, 
  document.getElementById('root')
)
