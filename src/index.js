import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import GlobalStyle from './styles/global'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Fragment>
      <Route path="/" component={Home} />
      <GlobalStyle />
      </Fragment>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);