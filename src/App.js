import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import Login from './components/login';
import Register from './components/register';
import Loginwaiter from './components/loginwaiter';
import Orderslist from './components/orderslist';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar title="Nancy ejemplo react" />
        <Route exact path="/" render={ () => <Login title="BurgerQueen" />} />
        {/* <Home title="BurgerQueen" /> */}
        <Route path="/register" component={Register} />
        <Route path="/loginwaiter" component={Loginwaiter} />
        <Route path="/orderslist" component={Orderslist} />
      </div>
    </BrowserRouter>

  );
}

export default App;
