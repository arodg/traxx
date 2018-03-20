import React, { Component } from "react";
//import ViewBtn from "../components/ViewBtn";
//import RequestTable from "../components/RequestTable";
import SecurityRole from "../components/SecurityRole";
import {HelloMsg} from "../components/HelloMsg";
//import InitiatorNavbar from "../components/InitiatorNavbar";
import { StateDrop } from "../components/StateDrop";
import { InputFld } from "../components/InputFld";

class AddVendorRequest extends Component {
  constructor(props) {
    super(props);
    this.vendor = {};
    this.state = {
      vendorName: "",
      addressOne: "",
      addressTwo: "",
      city: "",
      stateUS: "",
      zip: "",
      phone: "",
      contact: "",
      email: "",
      website: ""
    };
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this[name] = value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form>
        <label htmlFor="vendorName">Vendor Name</label>
        <InputFld
          type="text"
          name="vendorName"
          onChange={this.handleInputChange}
          value={this.state.vendorName}
          autoFocus
          required
        />
        <label htmlFor="addressOne">Address Line 1</label>
        <InputFld
          type="text"
          name="addressOne"
          onChange={this.handleInputChange}
          value={this.state.addressOne}
          required
        />
        <label htmlFor="addressTwo">Address Line 2</label>
        <InputFld
          type="text"
          name="addressTwo"
          onChange={this.handleInputChange}
          value={this.state.addressTwo}
        />
        <label htmlFor="city">City</label>
        <InputFld
          type="text"
          name="city"
          onChange={this.handleInputChange}
          value={this.state.city}
          required
        />
        <label htmlFor="stateUS">State</label>
        <StateDrop
          type="select"
          name="stateUS"
          onChange={this.handleInputChange}
          value={this.state.stateUS}
          required
        />
        <label htmlFor="zip">Zip Code</label>
        <InputFld
          type="number"
          name="zip"
          onChange={this.handleInputChange}
          value={this.state.zip}
          required
        />
        <label htmlFor="phone">Phone Number</label>
        <InputFld
          type="number"
          name="phone"
          onChange={this.handleInputChange}
          value={this.state.phone}
          required
        />
        <label htmlFor="contact">Contact Name</label>
        <InputFld
          type="text"
          name="contact"
          onChange={this.handleInputChange}
          value={this.state.contact}
        />
        <label htmlFor="email">Email</label>
        <InputFld
          type="email"
          name="email"
          onChange={this.handleInputChange}
          value={this.state.email}
        />
        <label htmlFor="website">Website</label>
        <InputFld
          type="text"
          name="website"
          onChange={this.handleInputChange}
          value={this.state.website}
        />
      </form>
    );
  }
}

export default AddVendorRequest;