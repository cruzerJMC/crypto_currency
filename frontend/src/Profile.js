import React, { Component } from "react";

class Profile extends Component {
  // console.log("Props in search", props)

  getDefaultConnection = () => {
    return { status: "disconnected" };
  };

  render() {
    return (
      <div>
        <div className="connection" />
        <span id="connection-status" classname={this.props.status}>
          {" "}
        </span>
      </div>
    );
  }
}

export default Profile;
