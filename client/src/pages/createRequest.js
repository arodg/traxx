import React, { Component } from "react";
import API from "../utils/API"
import ReactDOM from "react-dom";
import { AddBtn } from "../components/AddBtn";
//import { DeleteBtn } from "./components/DeleteBtn";
import { InputFld } from "../components/InputFld";
import { InputTxt } from "../components/InputTxt";
import Table from "../components/Table";
import { InputUnit } from "../components/InputUnit";
import Modal from "../components/Modal";

class CreateRequest extends Component {
  constructor(props) {
    super(props);
    this.items={};
    this.state = {
      item: {
        itemName: "",
        itemQuant: "",
        measureUnit: "",
        estPrice: "",
        estTotal: ""
      },
      taxRate: "",
      estShip: "",
      totalPrice: "",
      dateNeeded: "",
      vendor: "",
      justify: "",
      comments: "",
      showModal: false    };
  }

  handleItemSave = event => {
    event.preventDefault();
    API.saveItem({
      item_name: this.state.item.itemName,
      item_quant: this.state.item.itemQuant,
      item_unit: this.state.item.measureUnit,
      price: this.state.item.estPrice,
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
      <form>
        <AddBtn
          className="btn show-modal"
          onClick={() => this.setState({ showModal: !showModal })}
        >
          Add Item
        </AddBtn>
        <Modal
          open={showModal}
          onClose={() => this.setState({ showModal: false })}
        >
          <label htmlFor="itemName">Item Name</label>
          <InputFld
            type="text"
            name="itemName"
            onChange={this.handleInputChange}
            value={this.state.item.itemName}
            autoFocus required
          />
          <label htmlFor="itemQuant">Quantity</label>
          <InputFld
            type="number"
            name="itemQuant"
            onChange={this.handleInputChange}
            value={this.state.item.itemQuant}
          />
          <label htmlFor="measureUnit">Unit of Measurement</label>
          <InputUnit
            type="select"
            name="measureUnit"
            value={this.state.item.measureUnit}
            changeIt={this.handleInputChange}
          />
          <label htmlFor="estPrice">Estimated Price (USD)</label>
          <InputFld
            precision={2}
            step={0.01}
            type="number"
            name="estPrice"
            value={this.state.item.estPrice}
            onChange={this.handleInputChange}
          />
          <div className="row">
            <AddBtn onClick={this.handleItemSave}>Save Item</AddBtn>
            <AddBtn onClick={this.handleItemSave}>Add Another</AddBtn>
            <AddBtn onClick={() => this.setState({ showModal: false })}>
              Cancel
            </AddBtn>
          </div>
        </Modal>
        <div className="row">
          <Table className="newData" data={this.items} />
        </div>
        <div className="row">
          <div className="col-md-8">
            <label htmlFor="taxRate">Tax Rate</label>
            <InputFld
              name="taxRate"
              type="number"
              precision={3}
              step={0.001}
              value={this.state.taxRate}
              onChange={this.handleOtherInputChange}
            />
            <label htmlFor="estShip">Estimated Shipping</label>
            <InputFld
              name="estShip"
              precision={2}
              type="number"
              step={0.01}
              value={this.state.estShip}
              onChange={this.handleOtherInputChange}
            />
            <label htmlFor="dateNeeded">Date Needed</label>
            <InputFld
              name="dateNeeded"
              type="date"
              value={this.state.dateNeeded}
              onChange={this.handleOtherInputChange}
            />
            <label htmlFor="vendor">Vendor</label>
            <InputFld
              name="vendor"
              value={this.state.vendor}
              onChange={this.handleOtherInputChange}
            />
            <label htmlFor="justify">Justification</label>
            <InputTxt
              name="justify"
              value={this.state.justify}
              onChange={this.handleOtherInputChange}
            />
            <label htmlFor="comments">Comments</label>
            <InputTxt
              name="comments"
              value={this.state.comments}
              onChange={this.handleOtherInputChange}
            />
            <AddBtn>Submit</AddBtn>
          </div>
        </div>
      </form>
    );
  }
}

export default CreateRequest;