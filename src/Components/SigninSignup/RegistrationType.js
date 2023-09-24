import React from "react";
import './RegistrationType.css'


class RegistrationType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

     
    };
  }

  render() {
    let bgstyle= this.props.style;
    
    return (
      <div className="registrationtype">
        <button  style={{backgroundColor: bgstyle}}>
          <img
            src="https://img.icons8.com/?size=50&id=JnmsF1VBjlAo&format=png"
            alt="citizen"
          />
         {this.props.registrationType}
        </button>
      </div>
    );
  }
}

export default RegistrationType;
