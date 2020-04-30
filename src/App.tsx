import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Products from './components/Products';
import Carts from './components/Carts';
import CartProvider from './Context/CartProvider';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Switch>
          <Route path="/" component={Products} exact />
          <Route path="/carts" component={Carts} exact />
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
