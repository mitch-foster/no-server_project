import React, { Component } from 'react';

import back_arrow from '../../back_arrow.svg';
import search_arrow from './right-arrow.svg';

class NavBar extends Component {
    render() {
        return (
            <div className='navbar_div'>
                <div>
                    <img className='arrow' src={back_arrow} alt="back arrow"/>
                    <h6>Go Back</h6>    
                </div>
                <div>
                    <img className='arrow' src={search_arrow} alt="back arrow"/>
                    <h6>New Search</h6>
                </div> 
            </div>
        );
    }
}

export default NavBar;