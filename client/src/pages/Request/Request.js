import React, { Component } from "react";
import API from "../../utils/API"
import ReactDOM from "react-dom";
import { Input, FormBtn, TextArea } from "../../components/Form";
import { UnitDropdown } from "../../components/Dropdown";
import HomeNavbar from '../../components/HomeNavbar';
import Modal from "../../components/Modal";
import Table from "../../components/Table";

class Request extends Component {
  constructor(props) {
    super(props);
    this.item={};
    this.state = {
      item: {
        item_name: "",
        quantity: "",
        unit_price: "",
        extended_price: ""
      },
      request_required: "",
      tax_rate: "",
      totalPrice: "",
      est_shipping: "",
      request_total: "",
      justification: "",
      comments: "",
      showModal: false    };
  }

  handleItemSave = event => {
    event.preventDefault();
    API.saveItem({
      item_name: this.state.item.item_name,
      quantity: this.state.item.quantity,
      unit_price: this.state.item.unit_price,
      extended_price: this.state.item.extended_price
    })
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.items[name] = value;
    this.setState({
      item: this.items
    });
    console.log(value);
    console.log(this.state);
  };

  handleOtherInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(value);
  };

  render() {
    const { showModal } = this.state;
    return (
     <div> 
      <HomeNavbar />
      <form>
        <FormBtn
          className="btn show-modal"
          onClick={() => this.setState({ showModal: !showModal })}
        >
          Add Item
        </FormBtn>
        <Modal
          open={showModal}
          onClose={() => this.setState({ showModal: false })}
        >
          <label htmlFor="itemName">Item Name</label>
          <Input
            type="text"
            name="itemName"
            onChange={this.handleInputChange}
            value={this.state.item.itemName}
            autoFocus required
          />
          <label htmlFor="itemQuant">Quantity</label>
          <Input
            type="number"
            name="itemQuant"
            onChange={this.handleInputChange}
            value={this.state.item.itemQuant}
          />
          <label htmlFor="measureUnit">Unit of Measurement</label>
          <UnitDropdown
            type="select"
            name="measureUnit"
            value={this.state.item.measureUnit}
            changeIt={this.handleInputChange}
          />
          <label htmlFor="estPrice">Estimated Price (USD)</label>
          <Input
            precision={2}
            step={0.01}
            type="number"
            name="estPrice"
            value={this.state.item.estPrice}
            onChange={this.handleInputChange}
          />
          <div className="row">
            <FormBtn onClick={this.handleItemSave}>Save Item</FormBtn>
            <FormBtn onClick={this.handleItemSave}>Add Another</FormBtn>
            <FormBtn onClick={() => this.setState({ showModal: false })}>
              Cancel
            </FormBtn>
          </div>
        </Modal>
        <div className="row">
          <Table className="newData" data={this.items} />
        </div>
        <div className="row">
          <div className="col-md-8">
            <label htmlFor="taxRate">Tax Rate</label>
            <Input
              name="taxRate"
              type="number"
              precision={3}
              step={0.001}
              value={this.state.taxRate}
              onChange={this.handleOtherInputChange}
            />
            <label htmlFor="estShip">Estimated Shipping</label>
            <Input
              name="estShip"
              precision={2}
              type="number"
              step={0.01}
              value={this.state.estShip}
              onChange={this.handleOtherInputChange}
            />
            <label htmlFor="dateNeeded">Date Needed</label>
            <Input
              name="dateNeeded"
              type="date"
              value={this.state.dateNeeded}
              onChange={this.handleOtherInputChange}
            />
            <label htmlFor="vendor">Vendor</label>
            <Input
              name="vendor"
              value={this.state.vendor}
              onChange={this.handleOtherInputChange}
            />
            <label htmlFor="justify">Justification</label>
            <TextArea
              name="justify"
              value={this.state.justify}
              onChange={this.handleOtherInputChange}
            />
            <label htmlFor="comments">Comments</label>
            <TextArea
              name="comments"
              value={this.state.comments}
              onChange={this.handleOtherInputChange}
            />
            <FormBtn>Submit</FormBtn>
          </div>
        </div>
      </form>
      </div>
    );
  }
}

export default Request;
