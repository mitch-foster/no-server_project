import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import marvel_logo from '../../marvel_logo.png'
import { Button } from 'react-bootstrap';



class LandingPage extends Component {
    render() {
        return (
            <div className='main_div'>
                <h1>Marvel Characters</h1> 
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta maiores veniam officia nihil earum consequuntur</h3>
                <img className='marvel_logo' src={marvel_logo} alt="Marvel Logo"/>
                <Link to='/search'>
                    <Button>ENTER</Button>
                </Link>
                <div>
                    <p>not breaking copyright laws stuff</p>
                </div>
            </div>
        );
    }
}

export default LandingPage;