import React, { Component, Fragment } from "react";

export default class Signup extends Component {
  state = {
    // consider moving this down
    userName: "",
    signPassword: "",
    // confirmInput:"",
    firstName: "",
    lastName: ""
  };

  addUser = event => {
    // const target = event.target;
    // const value = target.value;
    // const name = target.name;
    event.preventDefault();
    // console.log(event.target)
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        firstname: this.refs.firstname.value,
        lastname: this.refs.lastname.value,
        username: this.refs.username.value,
        password: this.refs.password.value
      })
    })
      .then(response => response.json())
      .then(newUser => console.log(newUser))
      .then(
        this.setState({
          userName: "",
          signPassword: "",
          // confirmInput:"",
          firstName: "",
          lastName: ""
        })
      );
  };

  handleChange = event => {
    console.log("typing");
    console.log(event.target);
    //  console.log(event.target.value)

    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <div>
          <div id="signup">
            <form onSubmit={this.addUser}>
              <input
                type="text"
                ref="firstname"
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
              <input
                type="text"
                ref="lastname"
                name="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
              <input
                type="text"
                ref="username"
                name="userName"
                placeholder="Username"
                value={this.state.userName}
                onChange={this.handleChange}
              />
              <input
                type="password"
                ref="password"
                name="signPassword"
                placeholder="Password"
                value={this.state.signPassword}
                onChange={this.handleChange}
              />
              {/* <input type="password" name="confirmInput" placeholder="Confirm Password" value={this.props.confirmInput} onChange={this.props.handleChange}/> */}
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
