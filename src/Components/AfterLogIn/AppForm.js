import React, { useState } from 'react';
import './AppForm.css'
import Silhoutte from '../../assests/images/AfterLogin/Silhoutte.png'
import { FaEdit } from 'react-icons/fa';

class AppForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    render(){
        return (
            <div>
                <div className="setting-container">
                    <div className='header'>
                        <h1>Profile Settings</h1> 
                    </div>
                    <div className='form-container'>
                        <div className="profile-image">
                            <div><img src={Silhoutte}></img></div>
                            <div style={{position:'relative', borderRadius:'50%', width: '5rem',height: '5rem', right:'4rem', top:'3rem', zIndex:'2', }}>
                                <FaEdit className="icon" style={{width:'5rem',height:'5rem', opacity:'45%', color:'black'}}/></div>
                            <div><h3>Edit Profile Image</h3></div>
                            
                        </div>

                        <div className='Name'>
                            <form action="#">
                                <label htmlFor="">First Name</label> <br/>
                                <input type="text" /> <br/>
                                <label htmlFor="">Last Name</label> <br/>
                                <input type="text" /> <br />
                                <label htmlFor="">Set Occupation</label> <br />
                                <input type="text" /> <br/>
                                <label htmlFor="">Update Mobile No.</label> <br />
                                <input type="text" /> <br/>
                                <label htmlFor="">Set Your Bio</label> <br/>
                                <input className="Bio" type="text" placeholder='Tell us Something About Yourself' /> <br/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppForm;
