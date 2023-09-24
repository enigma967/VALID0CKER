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
        console.log(TestShown);
        let show= TestShown.isdisplay? '':TestShown.display.display;
        let opacity= TestShown.isdisplay? TestShown.display.opacity:'';
        return (
            <>
                <div className ="login-container" style={{display: show}}>
                    <SwitchContext>
                        <LoginSignup/>
                    </SwitchContext>
                    
                </div>
            </>
        )
    }

}


export default SignInSignUp;
