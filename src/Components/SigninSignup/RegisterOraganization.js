import React from "react";

class RegisterOrganization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
         <form>
          <div className="form-group">
            <label>Username</label>
            <input
             placeholder="enter your email"
              type="email"
              value={this.state.email}
              // onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>organization id*</label>
            <input
            placeholder="eg :your id proof ,company registation number etc."
              type="password"
              value={this.state.password}
              //onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Verfy Your ID</label>
            <input
              type="password"
              value={this.state.password}
              //onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button>verify</button>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
            placeholder="Create your password"
              type="password"
              value={this.state.password}
              //onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="Submit" onClick={this.handleLogin}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default RegisterOrganization;
