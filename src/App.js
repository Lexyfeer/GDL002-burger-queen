import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import Login from './components/login';
import Register from './components/register';
import MenulistbreakfastDB from './components/breakfast';
import MenulistlunchDB from './components/lunch';
import Orderskitchen from './components/orderstokitchen';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar title="Nancy ejemplo react" />
        <Route exact path="/" render={ () => <Login title="BurgerQueen" />} />
        {/* <Home title="BurgerQueen" /> */}
        <Route path="/register" component={Register} />
        <Route path="/breakfast" component={MenulistbreakfastDB} />
        <Route path="/lunch" component={MenulistlunchDB} />
        <Route path="/Orderstokitchen" component={Orderskitchen} />
      </div>
      <div>
      </div>
    </BrowserRouter>

  );
}

export default App;
