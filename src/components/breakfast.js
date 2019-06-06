import React, { Component } from 'react';
import firebase from '../firebase/firebase';
import Orderlist from './orderslist'
import Btnorderkitchen from './btnsendmenu'

// import { Link } from 'react-router-dom';

class MenulistbreakfastDB extends Component {
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
        const breakfastRef = firebase.database().ref('menubreakfast');
        breakfastRef.on('value', (snapshot) => {
            let menubreakfast1 = snapshot.val();
            let newStatemenubreakfast = [];
            for (let menubreaksfast2 in menubreakfast1) {
                newStatemenubreakfast.push({
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
                <div className="container2" >{this.state.menubreaksfast.map((breakfast, i) =>
                    <div key={i} className='menuContainer'>
                        <button className='breakfastImage' onClick={() => {
                            this.submit(breakfast.Name, breakfast.Price);
                        }} type="submit">
                            <div className='breakfastImage' style={{ backgroundImage: "url(" + breakfast.Image + ")" }}>
                            </div>
                            <div>
                            <h5>{breakfast.Name}</h5>
                            <h5>{breakfast.Price}</h5>
                            </div>
                                      
                        </button>

                    </div>

                )}
                </div>
                <Orderlist menuList={this.state.orders} />
                <button onClick={this.sumOrder}>
                    <h4>Total ${this.state.total}</h4>
                </button>
                <Btnorderkitchen order={this.state.orders} />
            </div>
        )
    }
}

export default MenulistbreakfastDB;
