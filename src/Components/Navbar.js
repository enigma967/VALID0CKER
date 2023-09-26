import React from 'react';
import './Navbar.css';
import IsDisplay, { IsDisplayContext } from './IsDisplay';
import logo from '../assests/images/logo.png';
import { FaSearch } from "react-icons/fa";



class Navbar extends React.Component {
    static contextType = IsDisplayContext;
    constructor(props) {
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
        let shown = this.context;

        return (

            <div  id='na' >
        

                    <img className= 'item1' src={logo} style={{ height: '3rem', width: '3.5rem' }} />


                    <h1 className = 'item2' style={{ display: 'inline-block' ,fontFamily: 'cursive', margin:'0.3rem'}}> VALIDOCKER</h1>


                    <a  href='#root'><button className="ui secondary basic button item3">HOME</button></a>
                    <a  href='#ourServices'><button className="ui secondary basic button item4" >OUR SERVICES </button></a>
                    <a href='#aboutUs'><button className="ui secondary basic button item5" >ABOUT</button></a>
                    <div className='ui icon input kul'>
                            <input type ='text' 
                            placeholder='search...'
                            // onChange={(event)=>this.setState({entry:event.target.value})}
                            />
                            <i className='search icon'></i>
                        </div>

                    <a><button className="ui secondary basic button item6" onClick={shown.displayChangeCall}>Sign In /Sing Up</button></a>




                

            </div>
        );
    }
}


export default Navbar;