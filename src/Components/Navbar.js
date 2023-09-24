import React from 'react';
import './Navbar.css';
import IsDisplay, { IsDisplayContext } from './IsDisplay';
import SignInSignUp from './SignInSignUp';


class Navbar extends React.Component {
    static contextType= IsDisplayContext;
        constructor(props){
            super(props);
            // this.state = {
            // isdisplay: false,
            // display: {
            //     display: 'none'
            // }
        
        }

        // displayChange=()=>{

        //     this.setState({isdisplay: !this.state.isdisplay})
    
        // }


    render() {
        let shown= this.context;

        return (

            <div className='ui raised padded segment ' id='na' >

                <div className=" ui centered header ha" >
                    <a href='#root'><button className="ui secondary basic button">HOME</button></a>
                    <a href='#ourServices'><button className="ui secondary basic button" >OUR SERVICES </button></a>
                    <a href='#aboutUs'><button className="ui secondary basic button" >ABOUT</button></a>

                        <button className="ui secondary right floated basic button" onClick={shown.displayChangeCall}>Sign In /Sing Up</button>
                    



                </div>

            </div>
        );
    }
}


export default Navbar;