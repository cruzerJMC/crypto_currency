import React, { Component } from "react";
import "./App.css";
import { Header, Container, Segment, Button, Grid } from "semantic-ui-react";
// import socketIOClient from "socket.io-client";
// import Login from "./Login";
// import Signup from "./Signup";
import Homepage from "./Homepage";

class App extends Component {
  state = {
    currentUser: {},
    users: [],
    signup: false,
    login: true,
    // signEmail: "",
    // signPassword:"",
    // confirmInput:"",
    // firstInput:"",
    // lastInput:"",
    username: "",
    password: "",
    loggedIn: false
  };

  // componentDidMount() {
  //   fetch("http://localhost:3000/api/v1/users")
  //     .then(response => response.json())
  //     .then(userList =>
  //       this.setState({
  //         users: userList
  //       })
  //     );
  //   this.setState({
  //     currentUser: JSON.parse(sessionStorage.getItem("foundUser"))
  //   });
  // }

  // handleSubmit= (event) => {
  //     console.log("submitting", event.target)
  //     event.preventDefault();
  //     // this.setState({ loggedIn: true})
  //     fetch('http://localhost:3000/api/v1/users')
  //     .then(response => response.json())
  //     .then(userList => {
  //         // console.log(userList)
  //         const foundUser = userList.find(user => { return (user.username === this.state.logEmail) && (user.password === this.state.logPassword)})
  //         console.log("foundUser", foundUser)
  //         this.setState({
  //             currentUser: foundUser,
  //         })
  //     })
  //     }

  handleLogIn = event => {
    console.log("firing");
    // console.log('users', event.target.value)
    event.preventDefault();
    // if(this.state.users.length > 0 ){
    // let foundUser = this.state.users.find(user => user.username === this.state.logEmail && user.password === this.state.logPassword)
    const foundUser = this.state.users.find(
      user =>
        user.username === this.state.username &&
        user.password === this.state.password
    );
    //         console.log("foundUser", foundUser)
    if (foundUser !== undefined) {
      this.setState({
        currentUser: foundUser,
        loggedIn: true
      });
      sessionStorage.setItem("foundUser", JSON.stringify(foundUser));
    } else {
      alert("Invalid Password or Username");
    }
  };

  // componentDidMount(){
  //   this.setState({ foundUser: JSON.parse(sessionStorage.getItem('foundUser'))})
  //   }

  addUser = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    event.preventDefault();
    // console.log(event.target)
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ [name]: value })
    })
      .then(response => response.json())
      .then(newUser => console.log(newUser));
  };

  handleChange = event => {
    // console.log("typing")
    //  console.log(event.target)
    //  console.log(event.target.value)

    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  // switch = word => {
  //   // console.log("switching", word, this.state.signup, this.state.login )
  //   if (word === "signup") {
  //     return this.setState({
  //       signup: true,
  //       login: false
  //     });
  //   } else {
  //     return this.setState({
  //       signup: false,
  //       login: true
  //     });
  //   }
  // };

  render() {
    return (
      <div>
        <style>
          {`
      html, body {
        background-color: #252839 !important;
      }
      `}
        </style>
        {/* <div className="App"> */}
        {/* <div className="ui raised segment"> */}
        <div className="ui segment violet inverted">
          <Header color={"violet"} inverted as="h1">
            CryptoCurrency Dashboard
          </Header>
          <Homepage />
        </div>
        {/* </div> */}
      </div>

      //       {/* <Segment>
      //         <Grid.Row>
      //           <Segment>
      //             <Grid.Column verticalAlign="middle" textAlign="center">
      //               <Button.Group floated="right">
      //                 <Button
      //                   // floated="left"
      //                   size="large"
      //                   id="signupButton"
      //                   onClick={() => this.switch("signup")}
      //                   className={this.state.signup ? "yellow" : "blue"}
      //                 >
      //                   Sign Up
      //                 </Button>
      //                 <Button.Or />
      //                 <Button
      //                   // floated="left"
      //                   size="large"
      //                   id="loginButton"
      //                   onClick={() => this.switch("login")}
      //                   className={this.state.login ? "yellow" : "blue"}
      //                 >
      //                   Login
      //                 </Button>
      //               </Button.Group>
      //             </Grid.Column>
      //             <Grid.Column verticalAlign="middle" textAlign="center">
      //               {this.state.signup ? <Signup /> : null}
      //               {this.state.login ? (
      //                 <Login
      //                   handleSubmit={this.handleLogIn}
      //                   handleChange={this.handleChange}
      //                   username={this.state.username}
      //                   password={this.state.password}
      //                 />
      //               ) : null}
      //             </Grid.Column>
      //           </Segment>
      //         </Grid.Row>
      //       </Segment>
      //     </div>
      //   );
      //   return this.state.loggedIn ? (
      //     <Homepage currentUser={this.state.currentUser} />
      //   ) : (
      //     Login
      //   );
      // } */}
    );
  }
}

export default App;
