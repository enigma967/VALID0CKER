import React from "react";
import { BgSwitch } from "./SwitchContext";
import axios from "axios";
import { Navigate } from "react-router-dom";

class Login extends React.Component { 
  static contextType = BgSwitch;
  constructor(props) {
    super(props);
    this.state = {

      Username: "",
      Password: "",
      RegistrationType: "",
      authenticated: false,
      message: ""
    };

    this.onSubmitForm = this.onSubmitForm.bind(this);
  }


  async onSubmitForm(e) {
    e.preventDefault();

 
    const { Username, Password, RegistrationType} = this.state;

    await axios({
      method: 'post',
      url: 'http://localhost:8000/login/check',
      data: {
        Username: Username,
        Password: Password,
        RegistrationType: RegistrationType
      },
      headers: {}
    }).then(response => {
      
      if(response.data.user){
        const Username = response.data.user.Username;
        const Card = response.data.user.AadharCard;

        console.log(response.data.user);
        console.log(Username, Card);

        this.setState({authenticated: true});
        this.props.handleAuth(Username, Card);
        
        
      } else {
        



      }

    }).catch(error => {
      console.log(error);

    });
  }



  render() {
    let type = this.context;

    if(this.state.authenticated){
      return (
        <Navigate to="/DashBoard" />
      )
    }

    
    // let typeBg1 = type.selected.type1 ? type.BgColor.backgroundColor : '';
    // let typeBg2 = type.selected.type2 ? type.BgColor.backgroundColor : '';
    // let typeBg3 = type.selected.type3 ? type.BgColor.backgroundColor : '';


    // if (type.selected.type1) {

    //   this.setState({ RegistrationType: 'Citizen' })
    // } else if (type.selected.type2) {
    //   this.setState({ RegistrationType: 'Organization' })
    // }
    // else {
    //   this.setState({ RegistrationType: 'Lawyer' })
    // }
    // console.log(this.state.RegistrationType)


    

    return (
      <>
        <form onSubmit={this.onSubmitForm}>
          {/* <h3>Login As </h3>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center" }}>

            <input type='radio' id = "Citizen" name="RegistrationType" value='Citizen'/>
              
            <div onClick={type.actionType1} >
              <label for="Citizen" >
                  <RegistrationType registrationType="Citizen" style={typeBg1} />
              </label>
            </div >

              <input type='radio' id = "Organization" name="RegistrationType" value='Organization'/>
                <label for="Organization">
                  <div onClick={type.actionType2} >
                    <RegistrationType registrationType="Organization" style={typeBg2} />
                  </div>
                </label>
                <input type='radio' id = "Lawyer" name="RegistrationType" value='Lawyer'/>
                  <label for="Lawyer">
                    <div onClick={type.actionType3} >
                      <RegistrationType registrationType="Lawyer" style={typeBg3} />
                    </div>
                  </label>
                  </div> */}
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    onChange={(e) => this.setState({ Username: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    onChange={(e) => this.setState({ Password : e.target.value })}
                    required
                  />
                </div>
                < button type="submit">
                  Log In
                </button>
              </form >
              <p className="signup-link">
                Don't have an account? <a style={{ color: 'blue' }} onClick={type.actionSignup}>Sign Up</a>
              </p>
            </>
            );
  }
}

export default Login;
