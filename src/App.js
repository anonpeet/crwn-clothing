import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


/* const HomePage = props => {
  console.log(props);
  return (
    <div>
      <button onClick={() => props.history.push('/topics')}>Topics </button>
      <h1>HOME PAGE</h1>
    </div>
  );
}; */


function App() {
  return (
    <div>
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;