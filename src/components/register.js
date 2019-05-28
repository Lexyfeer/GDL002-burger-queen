import React from 'react';

const Register = (props) => (
    <div className="mainContent">
        <div className="container">
            <h2>{props.title}</h2>
            <h3>Registrate</h3>
            <div className="LoginImage">
                <div >
                    <form className="form">
                        <label for="nya">Nombre y Apellido: *</label>
                        <br />
                        <input className="form-control" type="text" name="nya" id="regnya" placeholder="Juan La Jara" required />
                        <br /><br />
                        <label for="cargo">Cargo: *</label>
                        <br />
                        <selec className="form-control">
                            <option value="Meserx">Meserx</option>
                            <option value="Cocinerx">Cocinerx</option>

                        </selec>
                        <br /><br />
                        <label for="email">Email: *</label>
                        <br />
                        <input className="form-control" type="text" name="email" id="regemail" placeholder="ejemplo@hotmail.com" required />
                        <br /><br />
                        <label for="password">Contraseña:</label>
                        <br />
                        <input className="form-control" type="password" name="contraseña" id="contraseña" required />
                        <br /><br />
                        <input className="btn" type="submit" value="Enviar" />
                    </form>
                </div>
            </div>
        </div>
    </div>
);


export default Register;

