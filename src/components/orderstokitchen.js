import React, { Component } from 'react';
import firebase from "../firebase/firebase";

class Orderskitchen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orderskit1: [],
            counter: 0
        };
    };

    componentWillMount() {
        function snapshotArray(snapshot) {
            let orders = [];
            snapshot.forEach(order => {
                const items = order.val();
                items.key = order.key;
                orders.push(items)
            });
            return orders
        }
        const dbFoodOrdersR = firebase.database().ref();
        const foodOrdersR = dbFoodOrdersR.child('orderKitchen/');
        foodOrdersR.on('value', snapshot1 => {
            const ordersArray = snapshotArray(snapshot1);
            this.setState({
                orderskit1: ordersArray
            })
        })
    }
    render() {
        return (
            <div className="card text-center">
                {this.state.orderskit1.map((orders, i) =>
                <div>
                    <div className="card-header">
                        <h5>Orden # {i + 1}</h5>
                    </div>
                    {orders.map((item, i) =>
                    <div className="card-body">
                        <h4 class="card-body text-primary">{item.item}</h4>
                    </div>  
                )}     
                </div>
            )}
            </div>
                
            );
        }
}

export default Orderskitchen;