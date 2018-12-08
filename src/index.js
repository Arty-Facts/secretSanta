import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import LogIn from './components/LogIn';
import TheGame from './components/TheGame';
import store from './store';

const root = document.getElementById('root');

ReactDOM.render(
  <Router>
    <div>
      <Provider store={store}>
        <div>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/TheGame" component={TheGame} />
        </div>
      </Provider>
    </div>
  </Router>, root,
);

