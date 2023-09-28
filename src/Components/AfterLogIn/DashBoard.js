// SideBar.js
import React from "react";
import "./SideBar.css";
import Saul from "../../assests/images/AfterLogin/saul.jpg";
import { FaEdit, FaHome, FaUserPlus, FaFileUpload, FaArrowCircleLeft } from 'react-icons/fa';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
  
closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

  render() {
    return (
        <div className="profile-page">

            <div className="sidebar">
                <div className="toggle-button" onclick={this.openNav}>
                    <button>☰</button>
                </div>
                <div className="sidebar-items"><a href="javascript:void(0)" class="toggle-button" onclick={this.closeNav}>Home</a></div>
                <div><a href="#">My Profile</a></div>
                <div><a href="#">Add Stakeholder</a></div>
                <div><a href="#">Upload Documents</a></div>
                <div><a href="#">Case Register</a></div>
                <div><a href="#">Settings</a></div>
                <div><a href="#">Sign Out</a></div>

                <div className="nav-bottom-btn"><a href="#">Help</a></div>
            </div>

            <div className="profile">
                <div className="Intro">
                    <img src={Saul} alt="" />
                    <div>
                        <h1 style={{paddingTop: '3.5rem'}}>Saul Goodman</h1>
                        <p className="Profession">• lawyer</p> 
                        <p className="Profession">• Supreme Court</p>  
                        <p className="Profession">• itsAllGoodman@gmail.com</p>
                        <h3>Bio</h3>
                        <p className="Bio">Don't Drink & Drive, But if you do Better Call Saul. </p>
                        <div>
                            <button className="button"><FaEdit/></button>
                            <button className="button"><FaHome/></button>
                            <button className="button"><FaUserPlus/></button>
                        </div>
                    </div>
            
                </div>
                <div className="document">
                    <div className="Org-document">
                        <h3>Upload Organization Documents</h3>
                        <button className="button"><FaFileUpload style={{height: '3rem', width: '3rem'}}/></button>
                    </div>
                    <div className="Per-document">
                        <h3>Upload Your Personal Documents </h3>
                        <button className="button"><FaFileUpload style={{height: '3rem', width: '3rem'}}/></button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
export default SideBar;
