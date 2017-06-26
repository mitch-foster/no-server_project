import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import home from '../../home.svg';
import search from '../../search.svg';

class NavBar extends Component {
    render() {
        return (
            <div className='navbar_div'>
                <div>
                    <Link to='/search'>
                        <img className='search' src={search} alt="search"/> 
                    </Link>
                </div>
                <div>
                    <Link to='/search'>
                        <img className='home' src={home} alt="home"/>
                    </Link>    
                </div> 
            </div>
        );
    }
}

export default NavBar;