import React from "react";
import "./styles.css";
const intialState = {
  name: "",
  password: ""
};
class Login extends React.Component {
  state = intialState;
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  validate = () => {
    let a = 0,
      k = 0;
    const users = [
      { id: 1, name: "abi", password: "ab" },
      { id: 2, name: "pank", password: "pan" },
      { id: 3, name: "frank", password: "fra" },
      { id: 4, name: "rama", password: "ram" },
      { id: 5, name: "shan", password: "sha" },
      { id: 6, name: "prak", password: "pra" },
      { id: 7, name: "nancy", password: "nan" },
      { id: 8, name: "suji", password: "suj" },
      { id: 9, name: "tresa", password: "tre" },
      { id: 10, name: "naomi", password: "nao" }
    ];
    if (!this.state.name) {
      alert("UserName cannot be blank");
      k++;
    }
    if (!this.state.password) {
      alert("Password cannot be blank");
      k++;
    }
    if (k === 0) {
      const hasAdmins = users.find(item => item.name === this.state.name);
      if (hasAdmins === undefined) {
        a++;
      } else {
        const hasPassword = users.find(
          item => item.password === this.state.password
        );
        if (hasPassword === undefined) {
          a++;
        } else {
          if (hasAdmins.id === hasPassword.id) {
            alert("Logged In Successfully");
          } else a++;
        }
      }
      if (a > 0) alert("Invalid user Details");
    }
  };
  handleSubmit = event => {
    event.preventDefault();
    this.validate();
    this.setState(intialState);
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <h1>LOGIN</h1>
            <div className="firstname">
              <label htmlFor="username">UserName</label>
              <input
                name="name"
                placeholder="Username"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor="password"> Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="submit">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;


