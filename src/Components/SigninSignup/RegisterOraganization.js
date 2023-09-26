import React from "react";
import axios from "axios";

class RegisterOrganization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      OrganisationName: '',
      OrganisationIdNo: '',
      OrganisationIdCard: '',
      Password: ''

    }

    this.onSubmitForm = this.onSubmitForm.bind(this)
  }
  async onSubmitForm(event) {
    event.preventDefault();
    const { OrganisationName, OrganisationIdNo, OrganisationIdCard, Password } = this.state;
    const data = new FormData();
    data.append('OrganisationName', OrganisationName);
    data.append('OrganisationIdNo', OrganisationIdNo);
    data.append('OrganisationIdCard', OrganisationIdCard);
    data.append('Password', Password);



    await axios({
      method: 'post',
      url: 'http://localhost:8000/api/create-organisation',
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
        <form onSubmit={this.onSubmitForm}>
          <div className="form-group">
            <label>Organization Name</label>
            <input
              placeholder="Enter Your Email"
              type="email"
              onChange={(e) => this.setState({ OrganisationName: e.target.value })}

              required
            />
          </div>
          <div className="form-group">
            <label>Organization ID No.*</label>
            <input
              placeholder="eg :your id proof ,company registation number etc."
              type="number"
              onChange={(e) => this.setState({ OrganisationIdNo: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Upload Organization ID Card</label>
            <input
              type="file"
              onChange={(e) => this.setState({ OrganisationIdCard: e.target.files[0] })}
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
              onChange={(e) => this.setState({ Password: e.target.value })}
              required
            />
          </div>

          <button type="Submit" >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default RegisterOrganization;
