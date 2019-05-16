import React from 'react';

const Orderslist = (props) => (
    <div className="mainContent">
        <div className="container">
            <h2>{props.title}</h2>
            <h3>Meserx-Lista de Pedidos</h3>
            <div className="homeImage"></div>
            <div className="thumbNailContainer">
                <div className="homeThumbNailContainer1"></div>
                <div className="homeThumbNailContainer2"></div>
                <div className="homeThumbNailContainer3"></div>
                <div className="homeThumbNailContainer4"></div>
            </div>

        </div>
    </div>
);


export default Orderslist;