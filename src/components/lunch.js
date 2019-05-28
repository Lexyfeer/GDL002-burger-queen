import React, { Component } from 'react';
import firebase from '../firebase/firebase';
import Orderlist from './orderslist'

// import { Link } from 'react-router-dom';

class MenulistlunchDB extends Component {
    constructor() {
        super()
        this.state = {
            menubreaksfast: [],
            menulunch: [],
            orders: [],
            total: []
        };
        this.submit = this.submit.bind(this);
        this.sumOrder = this.sumOrder.bind(this);
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
    submit(item, price) {
        const order = {
            item: item,
            price: price
        }
        this.setState({
            orders: [...this.state.orders, order]
        })
    };
    sumOrder () {
        const priceArr = this.state.orders.map((el) => el.price)
        const items = priceArr.reduce((sum, result) => {
            return sum + result;
        });
        this.setState({
            total: items
        });
    }
    render() {

        return (
            <div className="container1">
                <div className='mainContent'>
                    <div className='container'>
                        <h3>Iniciaste sesion como: meserx</h3>
                        <h2>¿Qué deseas ordenar?</h2>
                    </div>
                </div>
                <div className="container2" >{this.state.menulunch.map((lunch, i) =>
                    <div key={i} className='menuContainer'>
                        <button className='lunchImage' onClick={() => {
                            this.submit(lunch.Name, lunch.Price);
                        }} type="submit">
                            <div className='lunchImage' style={{ backgroundImage: "url(" + lunch.Image + ")" }}>
                            </div>
                            <div>
                            <h5>{lunch.Name}</h5>
                            <h5>{lunch.Price}</h5>
                            </div>
                                      
                        </button>

                    </div>

                )}
                </div>
                <Orderlist menuList={this.state.orders} />
                <button onClick={this.sumOrder}>
                    <h4>Total ${this.state.total}</h4>
                </button>
            </div>
        )
    }
}

export default MenulistlunchDB;
