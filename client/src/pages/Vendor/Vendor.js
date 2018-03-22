import React, { Component } from "react";
import { Hello } from "../../components/Hello";
import { StateDropdown } from "../../components/Dropdown";
import { Input} from "../../components/Form";

class Vendor extends Component {
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
        <Input
          type="text"
          name="vendorName"
          onChange={this.handleInputChange}
          value={this.state.vendorName}
          autoFocus
          required
        />
        <label htmlFor="addressOne">Address Line 1</label>
        <Input
          type="text"
          name="addressOne"
          onChange={this.handleInputChange}
          value={this.state.addressOne}
          required
        />
        <label htmlFor="addressTwo">Address Line 2</label>
        <Input
          type="text"
          name="addressTwo"
          onChange={this.handleInputChange}
          value={this.state.addressTwo}
        />
        <label htmlFor="city">City</label>
        <Input
          type="text"
          name="city"
          onChange={this.handleInputChange}
          value={this.state.city}
          required
        />
        <label htmlFor="stateUS">State</label>
        <StateDropdown
          type="select"
          name="stateUS"
          onChange={this.handleInputChange}
          value={this.state.stateUS}
          required
        />
        <label htmlFor="zip">Zip Code</label>
        <Input
          type="number"
          name="zip"
          onChange={this.handleInputChange}
          value={this.state.zip}
          required
        />
        <label htmlFor="phone">Phone Number</label>
        <Input
          type="number"
          name="phone"
          onChange={this.handleInputChange}
          value={this.state.phone}
          required
        />
        <label htmlFor="contact">Contact Name</label>
        <Input
          type="text"
          name="contact"
          onChange={this.handleInputChange}
          value={this.state.contact}
        />
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          name="email"
          onChange={this.handleInputChange}
          value={this.state.email}
        />
        <label htmlFor="website">Website</label>
        <Input
          type="text"
          name="website"
          onChange={this.handleInputChange}
          value={this.state.website}
        />
      </form>
    );
  }
}

export default Vendor;
