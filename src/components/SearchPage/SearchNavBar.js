import React, { Component } from 'react';

import back_arrow from '../../back_arrow.svg'

class SearchNavBar extends Component {
    render() {
        return (
            <div className='navbar_div'>
                <img className='back_arrow' src={back_arrow} alt="back arrow"/>
                <h6>Go Back</h6>     
            </div>
        );
    }
}

export default SearchNavBar;