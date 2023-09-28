import React from "react";
import "./AboutUs.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IsDisplayContext } from "./IsDisplay";

class About extends React.Component {
  static contextType= IsDisplayContext;
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let shown = this.context;
    return (
      <>
        <div style={{
          display: "flex",
          flexDirection: "column", backgroundColor:  " #B0D9B1 ",
          height:'fit-content',
          blockSize: 'fit-content'
        }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div className="About">
              <h1>What is Legal-Vault?</h1>
              <p>
                Legal eVault is in simple words, Digital Document Manager. It is
                a portal dedicated to providing digital verification platform
                for official documents and certificates, hence, overall reducing
                the need of tedious paperwork.
              </p>
              <p>
                All types of documents and certificates ranging from driving
                license to graduation mark sheets can be uploaded in eVault.
              </p>
              <p>
                Moreover, you can access your documents anytime anywhere, you
                just have to Login into your eVault account. Apart from all
                these paperless benefits associated with eVault you get the
                additional facility of eSign.
              </p>
              <p>
                All the documents can be very easily signed using eSign, it is
                nothing but a convenient way to digitally verify your documents.
              </p>
              <button>
                Read More <FaArrowAltCircleRight style={{ color: "yellow" }} />
              </button>
            </div>
            <div className="About">
              <h1>How to Sign in?</h1>
              <p >
                <b>You Just required your Aadhar Card Number and Your Service ID</b> 
              </p>
              <p>
                Click on the Sign In/Sign Up  button
                <ol>
                <li>Enter your Email.You can also use your Email as your Username. </li>
                <li>Enter your Aadhar Card Number.</li>
                <li>Choose your File which you want to upload.</li>
                <li> Create your password .  </li>
                <li>Please Confirm your password .</li>
                <li>Click to   Submit button.</li>
                 
                </ol>
              </p>
              <a href="#root">
                <button onClick={shown.displayChangeCall}>
               <b>SignIn</b>   <FaArrowAltCircleRight style={{ color: " #B0D9B1" }} />
              </button>
              </a>
              
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", paddingBottom: '10rem' }}>
            <div className="Forums">
              <a href="/"><h3>Organization</h3></a>
            </div>
            <div className="Forums">
              <a href="/"><h3>Communtiy</h3></a>
            </div>
            <div className="Forums">
              <a href="/"><h3>Network</h3></a>
            </div>
            <div className="Forums">
              <a href="/"><h3>Need Help</h3></a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
