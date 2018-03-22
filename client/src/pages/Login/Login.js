import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Input, FormBtn} from "../../components/Form";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
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
      <div>
        <div id ="welcome">
          WELCOME TO TRAX SYSTEM
          <h2>Manage and track your assets all in one place </h2>
        </div>

        <h1>LOGIN</h1>
        <hr />
        
        
        <div>
        <form>
          <label htmlFor="Username">Username</label>
            <Input
              type="text"
              name="userName"
              onChange={this.handleInputChange}
              value={this.state.userName}
            />
          <label htmlFor="password">Password</label>
            <Input
              name="password"
              onChange={this.handleInputChange}
              value={this.state.password}
            />
          <Link to={"/home"}><FormBtn >LOGIN</FormBtn></Link>
          
        </form>
      
        <div className="col-md-4">
          <img id="clipboard" src="/images/loginimg.jpg" alt="error loading" />
        </div>
        </div>
      </div>
    );
  }

}
export default Login;
