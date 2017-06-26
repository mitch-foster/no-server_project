import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import marvel_logo from '../../marvel_logo.png'
import marvel_lineup from '../../marvel_lineup.png'
import { Button } from 'react-bootstrap';



class LandingPage extends Component {
    render() {
        return (
            <div className='main_div'>
                <div className='landing_page_header_div'>
                </div>
                <div className='landing_page_div'>
                    <img className='marvel_logo' src={marvel_logo} alt="Marvel Logo"/>
                    <h1>Characters</h1> 
                    <h3 className='landing_page_welcome'>Educate yourself on the Marvel Universe</h3>
                    <Link to='/search'>
                        <Button className='btn'>ENTER</Button>
                    </Link>
                    {/*<img src={marvel_lineup} alt="marvel lineup"/>*/}
                </div>
            </div>
        );
    }
}

export default LandingPage;