import React from "react";
import { IsDisplayContext } from "./IsDisplay";
import LoginSignup from "./SigninSignup/LoginSignup";
import SwitchContext from './SigninSignup/SwitchContext'



class SignInSignUp extends React.Component {

    static contextType = IsDisplayContext;

    constructor(props) {
        super(props);




    }

    render() {

        let TestShown = this.context;
        let show= TestShown.isdisplay? '':TestShown.display.display;
        return (
            <>
                <div className ="login-container" style={{display: show}}>
                    <SwitchContext>
                        <LoginSignup handleAuth={this.props.handleAuth}/>
                    </SwitchContext>
                    
                </div>
            </>
        )
    }

}


export default SignInSignUp;
