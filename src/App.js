import React from "react";
import { BrowserRouter,Route,Routes, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import DashBoard from "./Components/AfterLogIn/DashBoard";
import AppForm from "./Components/AfterLogIn/AppForm";



class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            auth: true,
            Username: '',
            Card: '',
        }

        this.handleAuth = this.handleAuth.bind(this);
    }

    handleAuth(Username, Card){

        console.log(Username, Card);
        this.setState({auth: true});
        this.setState({Username: Username});
        this.setState({Card: Card});
        console.log(this.state.Username, this.state.Card);
    }



    render() {
        console.log(this.state.auth)
        
        return (
            <React.StrictMode>
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route  path="/" element={ <HomePage  handleAuth={this.handleAuth}/>} />
                        <Route exact path="/DashBoard" element={ this.state.auth? <DashBoard Username ={this.state.Username} Card={this.state.Card}/>:<Navigate to='/'/> } />
                        <Route exact path="/DashBoard/AppForm" element={ this.state.auth? <AppForm />:<Navigate to='/'/> } />  
                    </Routes>
                </div>
            </BrowserRouter>
            </React.StrictMode>
        );
    }

}

export default App;