import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Tasks from './pages/tasks';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/tasks" component={Tasks} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
