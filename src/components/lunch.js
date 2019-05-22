import React, { Component } from 'react';
import firebase from '../firebase/firebase';

// import { Link } from 'react-router-dom';

class MenulistlunchDB extends Component {
    constructor() {
        super()
        this.state = {
            menubreaksfast: [],
            menulunch: []
        };
    };
    componentDidMount() {
        const lunchRef = firebase.database().ref('menulunch');
        lunchRef.on('value', (snapshot) => {
            let menulunch1 = snapshot.val();
            let newStatemenulunch = [];
            for (let menulunch2 in menulunch1) {
                newStatemenulunch.push({
                    Name: menulunch1[menulunch2].Name,
                    Sabores: menulunch1[menulunch2].Sabores,
                    Price: menulunch1[menulunch2].Price,
                    Image: menulunch1[menulunch2].Image
                });
            }
            this.setState({
                menulunch: newStatemenulunch
            });
        });
    }
    render() {

        return (
            <div>
                <div className='mainContent'>
                    <div className='container'>
                        <h3>Iniciaste sesion como: meserx</h3>
                        <h2>¿Qué deseas ordenar?</h2>
                    </div>
                </div>
                <div>{this.state.menulunch.map((lunch, i) =>

                    <div key={i} className='menuContainer'>

                        <div className='lunchImage' style={{ backgroundImage: "url(" + lunch.Image + ")" }}></div>

                        <h3>{lunch.Name}</h3>
                        <h3>{lunch.Price}</h3>
                    </div>

                )}
                </div>
            </div>
        )
    }
}

export default MenulistlunchDB;



    // return (
    //     <div className='mainContent'>
    //         <div className='container'>
    //             {/* <h2>{props.title}</h2> */}
    //             <h3>Iniciaste sesion como: meserx</h3>
    //             <h2>¿Qué deseas ordenar?</h2>
    //             <Link className="button" to="/menubreaksfast">DESAYUNO</Link>
    //             <Link className="button" to="/menulunch">COMIDA</Link>

    //             {menuBreakfast}
    //         </div>
    //     </div>
    // )
