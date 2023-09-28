import React from "react";
import axios from "axios";

class RegisterCitizen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: '',
      AadharNumber: '',
      AadharCard: '',
      Password: '',
      ConfirmPassword: '',
      success: '',
      message: ''
    };

    this.onSubmitForm = this.onSubmitForm.bind(this);


  }



  async onSubmitForm(event) {
    event.preventDefault();

    const { Username, AadharNumber, AadharCard, Password, ConfirmPassword } = this.state;

    if (Password != ConfirmPassword) {
      this.setState({ message: "Passwords do not match" });

      // event.target.reset();
    }
    else {


      this.setState({ message: '' });

      const data = new FormData();
      data.append('Username', Username);
      data.append('AadharNumber', AadharNumber);
      data.append('AadharCard', AadharCard);
      data.append('Password', Password);



      await axios({
        method: 'post',
        url: 'http://localhost:8000/api/create-citizen',
        data: data,
        headers: {}

      }).then(response => {
        this.setState({ success: 'You have successfully Registered' });



      }).catch(error => {
        console.log(error);
      });



      event.target.reset();
    }

  }

  render() {

    return (
      <div>
        <div style={{ textAlign: "center", color: 'green', position: "relative" }}>
          <h3>{this.state.success}</h3>
        </div>
        <form onSubmit={this.onSubmitForm}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="email"
              onChange={(e) => this.setState({ Username: e.target.value })}
              required
              placeholder="Enter Your Email"
            />

          </div>
          <div className="form-group">
            <label>Aadhar Number</label>
            <input
              type="number"
              onChange={(e) => this.setState({ AadharNumber: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Upload Your Aadhar</label>
            <input
              type="file"
              onChange={(e) => this.setState({ AadharCard: e.target.files[0] })}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              placeholder="Create your password"
              type="password"
              onChange={(e) => this.setState({ Password: e.target.value })}

              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              placeholder="Confirm your password"
              type="password"
              onChange={(e) => this.setState({ ConfirmPassword: e.target.value })}
              required
            />
            <p style={{ textAlign: 'center', color: 'red' }}>{this.state.message}</p>
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
