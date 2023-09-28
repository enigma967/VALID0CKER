import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import IsDisplay from "./Components/IsDisplay";
import SwitchContext from "./Components/SigninSignup/SwitchContext";


ReactDOM.render(
    <SwitchContext>
        
        <IsDisplay>
            <App />
        </IsDisplay>

    </SwitchContext>
        
    ,
    document.querySelector('#root')
)