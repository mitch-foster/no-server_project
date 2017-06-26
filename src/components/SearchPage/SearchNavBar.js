import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import home from '../../home.svg'

class SearchNavBar extends Component {
    render() {
        return (
            <div className='search_navbar_div'>
                <Link to='/'>
                    <img className='home' src={home} alt="home"/>
                </Link>     
            </div>
        );
    }
}

export default SearchNavBar;