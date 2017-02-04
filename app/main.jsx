'use strict'
import React from 'react'
import {Router, Route, getIndexRoute, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import * as firebase from 'firebase'

import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDT44lUujjJ6OnQO4bqdzrghLKpemia2MY",
  authDomain: "hearts-97b0e.firebaseapp.com",
  databaseURL: "https://hearts-97b0e.firebaseio.com",
  storageBucket: "hearts-97b0e.appspot.com",
  messagingSenderId: "12856640783"
};

const fb = firebase  
.initializeApp(config)
.database()
.ref();

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <getIndexRoute to="/jokes" /> 
      <Route path="/" component={Jokes}>
        <Route path="/jokes" component={Jokes} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)

//didn't know about getIndexRoute - it solved error I was getting <IndexRoute> does not make sense at the root of your route config