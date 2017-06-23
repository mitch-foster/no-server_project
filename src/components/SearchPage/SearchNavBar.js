import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import back_arrow from '../../back_arrow.svg'

class SearchNavBar extends Component {
    render() {
        return (
            <div className='search_navbar_div'>
                <Link to='/'>
                    <img className='arrow' src={back_arrow} alt="back arrow"/>
                    <h6>Home</h6>
                </Link>     
            </div>
        );
    }
}

export default SearchNavBar;