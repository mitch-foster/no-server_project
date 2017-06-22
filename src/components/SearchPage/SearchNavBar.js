import React, { Component } from 'react';

import back_arrow from '../../back_arrow.svg'

class SearchNavBar extends Component {
    render() {
        return (
            <div className='search_navbar_div'>
                <img className='arrow' src={back_arrow} alt="back arrow"/>
                <h6>Go Back</h6>     
            </div>
        );
    }
}

export default SearchNavBar;