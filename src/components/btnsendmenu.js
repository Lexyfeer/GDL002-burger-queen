import React from "react";
import firebase from "../firebase/firebase";

class Btnorderkitchen extends React.Component {
  constructor() {
    super();

    this.updateOrderToFirebase = this.updateOrderToFirebase.bind(this);
  }

  // state = { //esto se usa para mostrar un modal desde la linea 6 a la 13
  //   modalOpen: false,
  // }
  

  // openModal = () => {
  //   this.setState({ modalOpen: true });
  // }

  updateOrderToFirebase = props => {
    const order = this.props.order;
    const foodOrder = firebase
      .database()
      .ref("orderKitchen/")
      .child("order")
      .push().key;
    let updates = {};
    updates["orderKitchen/" + foodOrder] = order;
    return firebase
      .database()
      .ref()
      .update(updates);
  };
  render() {
    return (
      <div className="container">
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          onClick={this.updateOrderToFirebase}
          // onClick={this.openModal} //aqui se dispara la accion con un onClick
        >
          Mandar pedido a cocina
        </button>

        {/* Modal */}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Btnorderkitchen;
