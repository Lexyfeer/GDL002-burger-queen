import React from 'react';
import { menuList } from '../data/menu';

const Loginwaiter = (props) => {
    let menu = menuList.map((breakfast) => {
        return (
            <div className='menuContainer'>
                <a>
                    <div className='breakfastImage' style={{ backgroundImage: "url(" + breakfast.Image + ")"}}></div>
                </a>
                <h3>{breakfast.Name}</h3>
            </div>
        );
    });
    return (
        <div className='mainContent'>
            <div className='container'>
                {/* <h2>{props.title}</h2> */}
                <h3>Iniciaste sesion como: meserx</h3>
                <div className='thumbNailContainer'>
                    <div className='LoginwaiterThumbNailContainer1'></div>
                    <div className='LoginwaiterThumbNailContainer2'></div>
                    <div className='LoginwaiterThumbNailContainer3'></div>
                    <div className='LoginwaiterThumbNailContainer4'></div>
                </div>
                {menu}
            </div>
        </div>
    )
};




export default Loginwaiter;