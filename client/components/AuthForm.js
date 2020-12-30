import React, { Component } from "react";

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  render() {
    return (
      <div className="row">
        <form className="col s4">
          <div className="input-field">
            <label>Email</label>
            <input
              value={this.state.email}
              name="email"
              onChange={(e) =>
                this.setState({ [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input
              value={this.state.password}
              name="password"
              onChange={(e) =>
                this.setState({ [e.target.name]: e.target.value })
              }
            />
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
