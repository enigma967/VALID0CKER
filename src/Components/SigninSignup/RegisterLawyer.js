import React from "react";
import axios from "axios";


class RegisterLawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: '',
      LicenseNo: '',
      LawyerLicenseCard: '',
      Password: '',
      ConfirmPassword: '',
      success: '',
      message: ''

    }
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  async onSubmitForm(event) {
    event.preventDefault();
    const { Username, LicenseNo, LawyerLicenseCard, Password , ConfirmPassword} = this.state;

    if (Password != ConfirmPassword) {
      this.setState({ message: "Passwords do not match" });
      
      // event.target.reset();
    }
    else {
      this.setState({ message: "" });
      const data = new FormData();
      data.append('Username', Username);
      data.append('LicenseNo', LicenseNo);
      data.append('LawyerLicenseCard', LawyerLicenseCard);
      data.append('Password', Password);



      await axios({
        method: 'post',
        url: 'http://localhost:8000/api/create-lawyer',
        data: data,
        headers: {}

      }).then(response => {
        this.setState({success: 'You have successfully Registered' })


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
                placeholder="Enter your email"
                type="email"
                onChange={(e) => this.setState({ Username: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>License no</label>
              <input
                placeholder="enter your bar association Id"
                type="number"
                onChange={(e) => this.setState({ LicenseNo: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Verfy Your ID</label>
              <input
                type="file"
                onChange={(e) => this.setState({ LawyerLicenseCard: e.target.files[0] })}
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
            </div>
            <p style={{textAlign: 'center', color: 'red'}}>{this.state.message}</p>

            <button type="Submit">
              Submit
            </button>
          </form>
        </div>
      );
    }
  }



export default RegisterLawer;
