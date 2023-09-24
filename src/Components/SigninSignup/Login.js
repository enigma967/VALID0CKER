import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  render() {
    return (
      <>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={this.state.email}
              // onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={this.state.password}
              //onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="button" onClick={this.handleLogin}>
            Log In
          </button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="/">Sign Up</a>
        </p>
      </>
    );
  }
}

export default Login;
