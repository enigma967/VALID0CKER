// SideBar.js
import React from "react";
import "./SideBar.css";
import saul from '../../assests/images/AfterLogin/saul.jpg'
import { FaEdit, FaHome, FaUserPlus, FaFileUpload, FaArrowCircleLeft } from 'react-icons/fa';
import { Navigate } from "react-router-dom";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state  ={
        AppForm : false
    }

    this.openNav =this.openNav.bind(this);
    this.closeNav =this.closeNav.bind(this);
    this.NavigateToAppForm = this.NavigateToAppForm.bind(this);
  }

openNav() {
    // document.getElementById("sidebar").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
}
  
closeNav() {
    // document.getElementById("sidebar").style.width = "0";
    // document.getElementById("main").style.marginLeft= "0";
}

NavigateToAppForm (){
    this.setState({AppForm : !this.state.AppForm})
};


  render() {
    if(this.state.AppForm){
        return (
            <Navigate to = '/DashBoard/AppForm'/>

    )}
    console.log(this.props.Card);

    return (
        <div className="profile-page">

            <div className="sidebar">
                <div className="toggle-button" onClick={this.openNav}>
                    <button>☰</button>
                </div>
                <div className="sidebar-items"><a href="javascript:void(0)" className="toggle-button" onClick={this.closeNav}>Home</a></div>
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
                    <img src="file:///D:/project/SIH%20(Legal%20Vault%20)/surukaro/Server/public/AadharCard/1695893142314-profile1.jpg" alt="" />
                    <div>
                        <h1 style={{paddingTop: '3.5rem'}}>{this.props.Username}</h1>
                        <p className="Profession">• lawyer</p> 
                        <p className="Profession">• Supreme Court</p>  
                        <p className="Profession">• {this.props.Username}</p>
                        <h3>Bio</h3>
                        <p className="Bio">Don't Drink & Drive, But if you do Better Call Saul. </p>
                        <div>
                            <button className="button" onClick={this.NavigateToAppForm}><FaEdit/></button>
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
