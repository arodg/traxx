import React, { Component } from "react";

class Modal extends Component {
  render() {
    return this.props.open ? (
      <div>
        <header className="modal-header">
          <div className="row">
            <h4>Add Item</h4>
            <button onClick={() => this.props.onClose()}>&times;</button>
          </div>
        </header>
        <div className="modal-background">
          <div role="dialog" className="modal-dialog">
           <div className="modal-content">
            {this.props.children}
           </div>
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default Modal;