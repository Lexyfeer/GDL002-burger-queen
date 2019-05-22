import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import Login from './components/login';
import Register from './components/register';
import Menulistbreakfast from './components/breakfast';
import Orderslist from './components/orderslist';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar title="Nancy ejemplo react" />
        <Route exact path="/" render={ () => <Login title="BurgerQueen" />} />
        {/* <Home title="BurgerQueen" /> */}
        <Route path="/register" component={Register} />
        <Route path="/breakfast" component={Menulistbreakfast} />
        <Route path="/orderslist" component={Orderslist} />
      </div>
    </BrowserRouter>

  );
}

export default App;
