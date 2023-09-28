import React, { createContext } from 'react';
// import Navbar from './Navbar';
// import SignInSignUp from './SignInSignUp';

export const IsDisplayContext = createContext();

class IsDisplay extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        isdisplay: false,
        display: {
            display: 'none',
            position: {
                height : "100vh",
                overflow : 'hidden'
            },
        }
    }
    }

    

    displayChange=()=>{

        this.setState({isdisplay: !this.state.isdisplay})

    }

    render(){
        return(
            <IsDisplayContext.Provider value={{ ...this.state,  displayChangeCall: this.displayChange}}> 
                {this.props.children}
            </IsDisplayContext.Provider>

        )
    }
}

export default IsDisplay;


