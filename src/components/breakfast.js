import React, {Component} from 'react';
import firebase from '../firebase/firebase';

// import { Link } from 'react-router-dom';

class Menulistbreakfast extends Component {
    constructor () {
        super()
        this.state = {
            menubreaksfast: [],
            menulunch: []
        };
    };
    componentDidMount () {
        const breakfastRef = firebase.database().ref('menubreakfast');
        breakfastRef.on('value',(snapshot) => {
            let menubreakfast1 = snapshot.val();
            let newStatemenubreakfast = [];
            for(let menubreaksfast2 in menubreakfast1) {
                newStatemenubreakfast.push ({
                    Name: menubreakfast1[menubreaksfast2].Name,
                    Sabores: menubreakfast1[menubreaksfast2].Sabores,
                    Price: menubreakfast1[menubreaksfast2].Price,
                    Image: menubreakfast1[menubreaksfast2].Image
                });
            }
            this.setState({
                menubreaksfast: newStatemenubreakfast
            });
        });
    }
    render() {
        
        return (
            <div>
                <div>{this.state.menubreaksfast.map((breakfast, i) => 
                    
                        <div key= {i}className='menuContainer'>
                            
                                <div className='breakfastImage' style={{ backgroundImage: "url(" + breakfast.Image + ")"}}></div>
                            
                            <h3>{breakfast.Name}</h3>
                            <h3>{breakfast.Price}</h3>
                        </div>
                    
                )}
                </div>
            </div>
        )
    }
}

export default Menulistbreakfast;
    
        

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
