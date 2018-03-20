import React, { Component } from "react";
import { InputFld } from "../components/InputFld";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.user = {};
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      tempPassword: "",
      tempPasswordConfirm: "",
      securityRole: "",
      phone: "",
      title: "",
      email: ""
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this[name] = value;
    this.setState({
      [name]: value
    });
  };
  handleInputPassword = event => {
    const { name, value } = event.target;
    this[name] = value;
    if (this.state.tempPassword !== this.state.tempPasswordConfirm) {
      return <p>Passwords do not match</p>;
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  render() {
    return (
      <form>
        <label htmlFor="firstName">First Name</label>
        <InputFld
          type="text"
          name="firstName"
          onChange={this.handleInputChange}
          value={this.state.firstName}
          autoFocus
          required
        />
        <label htmlFor="lastName">Last Name</label>
        <InputFld
          type="text"
          name="lastName"
          onChange={this.handleInputChange}
          value={this.state.lastName}
          required
        />
        <label htmlFor="userName">Username</label>
        <InputFld
          type="text"
          name="userName"
          onChange={this.handleInputChange}
          value={this.state.userName}
          required
        />
        <label htmlFor="tempPassword">Temporary Password</label>
        <InputFld
          type="password"
          name="tempPassword"
          onChange={this.handleInputPassword}
          value={this.state.tempPassword}
          required
        />
        <label htmlFor="tempPasswordConfirm"> Confirm Temporary Password</label>
        <InputFld
          type="password"
          name="tempPasswordConfirm"
          onChange={this.handleInputPassword}
          value={this.state.tempPasswordConfirm}
          required
        />
        <label htmlFor="securityRole">Security Role</label>
        <SecurityDrop
          type="select"
          name="securityRole"
          onChange={this.handleInputChange}
          value={this.state.securityRole}
          required
        />
      </form>
    );
  }
}
// form -

//     * first name - required
//     * last name - required
//     * username - required
//     * temp password - required
//             - 10 characters
//             - 1 symbol
//             - 1 number
//             - 1 uppercase letter
//             - 1 lowercase letter
//     * re-enter temp password - required
//             - must match temp password
//     * security role - required - drop down
//     * created date - auto - mm/dd/yyyy
//     * phone number - optional - (###) ###-####
//     * title - optional
//     * email - required - email format
// save button - modal pops up stating you have added "user first and last name" with a security role of "security role".
//                 Ok button on modal returns user to their home page
// cancel button - returns user to their home page without saving anything
