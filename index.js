import React, {Component} from 'react'
import { render } from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import SearchContainer from './containers/SearchContainer'
import ProfileListing from './containers/ProfileListing'
import PageNotFound from './components/PageNotFound'
import profileApp from './reducers'
import {persistStore, autoRehydrate} from 'redux-persist'
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router'

const store = autoRehydrate()(createStore)(profileApp)
persistStore(store)

const rootElement = document.getElementById('root')

let redirectToChild = (location, replaceState) => {
  replaceState(null, '/app');
}

render(
  <Provider store={store}>
  <Router>
    <Route path="/" component={App}>
      <IndexRoute  component={SearchContainer} onEnter={redirectToChild}/>
      <Route path="app" component={SearchContainer} />
      <Route path="profiles" component={ProfileListing} />
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
  </Provider>,
  rootElement
)
