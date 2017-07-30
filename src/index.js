import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux'
import {store} from './store/configureStore'
import App from './containers/App'
import Root from './components/Root'

const history = syncHistoryWithStore(hashHistory, store);
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Root}>
        <IndexRoute component={App} />
        </Route>
      </Router>
  </Provider>,
  document.getElementById('root')
)
