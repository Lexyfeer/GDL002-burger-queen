import React from 'react';

const Login = (props) => (
    <div className="mainContent">
        <div className="container">
            <h2>{props.title}</h2>
            <h3>Iniciar sesion</h3>
            <div className="LoginImage">
                <div >
            <form className="form">
                <label for="nya">Nombre y Apellido: *</label>
                <br />
                <input className="form-control" type="text" name="nya" id="nya" placeholder="Nancy Rodriguez" required />
                <br /><br />
                <label for="email">Email: *</label>
                <br />
                <input className="form-control" type="text" name="email" id="email" placeholder="ejemplo@hotmail.com" required />
                <br /><br />
                <label for="password">Contraseña:</label>
                <br/>
                <input className="form-control" type="password" name="contraseña" id="contraseña" required />
                <br /><br />
                <input className="btn" type="submit" value="Enviar" />
            </form>
            </div>
            </div>
        </div>
    </div>
);
        

export default Login;

