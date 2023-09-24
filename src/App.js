import React from 'react';
import Navbar from './Components/Navbar';
import TopImage from './Components/TopImage';
import NewsEvent from './Components/NewsEvent';
import ServiceCards from './Components/ServiceCard';
import SignInSignUp from './Components/SignInSignUp';
import About from './Components/About';
import IsDisplay from './Components/IsDisplay';



function App() {
    return (

        <div>
            <IsDisplay>
                <Navbar />
                <SignInSignUp/>
            </IsDisplay>
               
                
                
    
                
            
            
            <TopImage />
            <br /><br /><br />
            <NewsEvent />
            <h1 id="ourServices" style={{ paddingTop: '6rem' }} className='ui header centered'>Our Services</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>

                <ServiceCards useFor='upload document' />
                <ServiceCards useFor='review' />
                <ServiceCards useFor='upload document' />
                <ServiceCards useFor='upload document' />
                <ServiceCards useFor='upload document' />
                <ServiceCards useFor='upload document' />
                <ServiceCards useFor='upload document' />
                <ServiceCards useFor='upload document' />
            </div>
            <h1 id="aboutUs" style={{ paddingTop: '6rem' }} className='ui header centered'>About us</h1>
            <About />

        </div>


    )
}

export default App;