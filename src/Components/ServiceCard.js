import React from "react";
import Ganesh from '../assests/images/ganesh.png';
import './ServiceCards.css';

class ServiceCards extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <div className="card" style={{display: 'inline block', height: '20rem' , width: '20rem' } }>
                <img src={Ganesh}/>
                <h2>{this.props.useFor}</h2>
                <button type = '' className = "ui button raised ">click me </button>
                
            </div>
        )
    }
}

export default ServiceCards;