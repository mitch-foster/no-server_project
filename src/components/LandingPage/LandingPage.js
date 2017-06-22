import React, { Component } from 'react';

import marvel_logo from '../../marvel_logo.png'



class LandingPage extends Component {
    render() {
        return (
            <div className='main_div'>
                <div>
                    <h1>Marvel Heroes</h1> 
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta maiores veniam officia nihil earum consequuntur</h3>
                    <img className='marvel_logo' src={marvel_logo} alt="Marvel Logo"/>
                    <button className='enter_btn'>ENTER</button>
                </div>
            </div>
        );
    }
}

export default LandingPage;