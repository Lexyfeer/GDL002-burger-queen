import React, { Component } from 'react';

export class Orderlist extends Component{
    render(){
        const order = this.props.menuList.map((menu, i) => {
            return(
                <div>
                    
                    <ul key={i} className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <p>{menu.item}</p>
                            <span>{"$" + menu.price}</span>
                        </li>
                    </ul>
                </div>
            )
        })
        return(
            order
        )
    }
}

export default Orderlist;