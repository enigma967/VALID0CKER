import React from "react";
import axios from "axios";
var message='';
class RegisterCitizen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Username:'',
      AadharNumber:'',
      AadharCard:'',
      Password:''
    };
    
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  async onSubmitForm(event){
    event.preventDefault();
    const {Username,AadharNumber,AadharCard,Password} = this.state;
    const data = new FormData();
    data.append('Username',Username);
    data.append('AadharNumber',AadharNumber);
    data.append('AadharCard',AadharCard);
    data.append('Password',Password);
  
    

    await axios({
      method: 'post',
      url: 'http://localhost:8000/api/create-citizen',
      data: data,
      headers: {}

    }).then(response => {
      alert('You have successfully Registered')
     

    }).catch(error => {
      console.log(error);
    });

    event.target.reset();


  }

  render() {
    
    return (
      <div>
        <div style={{textAlign: "center", color: 'green', position: "relative" }}>
          <h1></h1>
        </div>
        <form onSubmit={this.onSubmitForm}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="email"
              onChange={(e) => this.setState({Username:e.target.value})}
              required
              placeholder="Enter Your Email"
            />

          </div>
          <div className="form-group">
            <label>Aadhar Number</label>
            <input
              type="number"
              value={this.state.password}
              onChange={(e) => this.setState({AadharNumber:e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Upload Your Aadhar</label>
            <input
              type="file"
              value={this.state.password}
              onChange={(e) => this.setState({AadharCard:e.target.files[0]})}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              placeholder="Create your password"
              type="password"
              onChange={(e) => this.setState({Password:e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              placeholder="Confirm your password"
              type="password"
              onChange={(e) => this.setState({PasswordConfirm:e.target.value})}
              required
            />
          </div>

          <button type="Submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default RegisterCitizen;
