import React from 'react';

const Login = (props) => (
    <div className="mainContent">
        <div className="container">
            <h2>{props.title}</h2>
            <h3>Iniciar sesion</h3>
            <div className="LoginImage"></div>
            <div className="thumbNailContainer">
                <div className="LoginThumbNailContainer1"></div>
                <div className="LoginThumbNailContainer"></div>
                <div className="LoginThumbNailContainer3"></div>
                <div className="LoginThumbNailContainer4"></div>
            </div>

        </div>
    </div>
);


export default Login;