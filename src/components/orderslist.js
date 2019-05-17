import React from 'react';

const Orderslist = (props) => (
    <div className="mainContent">
        <div className="container">
            <h2>{props.title}</h2>
            <h3>Meserx-Lista de Pedidos</h3>
            <div className="OrderslistImage"></div>
            <div className="thumbNailContainer">
                <div className="OrderslistThumbNailContainer1"></div>
                <div className="OrderslistThumbNailContainer2"></div>
                <div className="OrderslistThumbNailContainer3"></div>
                <div className="OrderslistThumbNailContainer4"></div>
            </div>

        </div>
    </div>
);


export default Orderslist;