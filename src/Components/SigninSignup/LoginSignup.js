// src/components/Login.js
import React from "react";
import "./Login.css";
import Login from "./Login";
import Signup from "./Signup";
import { BgSwitch } from "./SwitchContext";




class LoginSignup extends React.Component {
  static contextType = BgSwitch;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let con_val = this.context;
    let bg_login = con_val.checked ? con_val.BgColor.backgroundColor : "";
    let bg_signup = con_val.checked ? "" : con_val.BgColor.backgroundColor;
    let dis_login = con_val.checked ? con_val.isDisplay : "";
    let dis_signup = con_val.checked ? "" : con_val.isDisplay;
    let bg_borderSignup = con_val.checked ? con_val.BgColor.borderTop : "";
    let bg_borderLogin = con_val.checked ? "" : con_val.BgColor.borderTop;
    let bg_borderColorSignup = con_val.checked? con_val.BgColor.borderColor: "";
      
      
    let bg_borderColorLogin = con_val.checked? "": con_val.BgColor.borderColor;
      
      

    return (
        <div className="login-box">
          

          <div className="header">
          
            <button
              style={{
                backgroundColor: bg_login,
                borderBottom: bg_borderLogin,
                borderColor: bg_borderColorLogin,
              }}
              onClick={con_val.actionLogin}
            >
              Login
            </button>
            <button
              style={{
                backgroundColor: bg_signup,
                borderBottom: bg_borderSignup,
                borderColor: bg_borderColorSignup,
              }}
              onClick={con_val.actionSignup}
            >
              SignUp
            </button>
          </div>
          <div style={{ display: dis_login }}>
            <Login handleAuth={this.props.handleAuth}/>
          </div>
          <div style={{ display: dis_signup }}>
            <Signup />
          </div>
        </div>
      
    );
  }
}

export default LoginSignup;
