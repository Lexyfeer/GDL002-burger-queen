import React from 'react';
import { menuListBreakfast } from '../data/menubreakfast';
import { menuListLunch } from '../data/menulunch';
import { Link } from 'react-router-dom';

const Menulistbreakfast = () => {
    let menuBreakfast = menuListBreakfast.map((breakfast, index) => {
        return (
            <div className='menuContainer'>
                <a>
                    <div key={index} className='breakfastImage' style={{ backgroundImage: "url(" + breakfast.Image + ")"}}></div>
                </a>
                <h3>{breakfast.Name}</h3>
                <h3>{breakfast.Price}</h3>
            </div>
        );
    });
    let menuLunch = menuListLunch.map((lunch, index) => {
        return (
            <div className='menuContainer'>
                <a>
                    <div key={index} className='breakfastImage' style={{ backgroundImage: "url(" + lunch.Image + ")"}}></div>
                </a>
                <h3>{lunch.Name}</h3>
                <h3>{lunch.Price}</h3>
            </div>
        );
    });
    return (
        <div className='mainContent'>
            <div className='container'>
                {/* <h2>{props.title}</h2> */}
                <h3>Iniciaste sesion como: meserx</h3>
                <h2>¿Qué deseas ordenar?</h2>
                <Link className="button" to="/menubreaksfast">DESAYUNO</Link>
                <Link className="button" to="/menulunch">COMIDA</Link>
                
                {menuBreakfast}
                {menuLunch}
            </div>
        </div>
    )
};




export default Menulistbreakfast;