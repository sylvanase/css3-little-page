import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Users from "./routes/Users.js";
import Doraemon from "./routes/Doraemon.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/users" component={Users} />
        <Route path="/doraemon" component={Doraemon} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
