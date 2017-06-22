import React, { Component } from 'react';

import NavBar from './NavBar'
import spiderman from './spiderman.jpg'

class ResultsPage extends Component {
    render() {
        return (
            <div className='main_div'>
                <NavBar/>
                <div>
                    <h2>Caracter Name</h2>
                    <img className='charcter_image' src={spiderman} alt="Spider-Man"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quisquam mollitia excepturi sapiente dolore nesciunt aliquam odio magni eligendi, non rerum est cum architecto laboriosam a saepe quas inventore. Quis?</p>
                </div>
            </div>
        );
    }
}

export default ResultsPage;