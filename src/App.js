import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home';
import Transaction from './pages/transaction';
import Search from './pages/search';
import Account from './pages/account';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/transaction" component={Transaction}/>
        <Route path="/search" component={Search}/>
        <Route path="/account" component={Account}/>
      </Switch>
    </Router>
  );
}

export default App;
