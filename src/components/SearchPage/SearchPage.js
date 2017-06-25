import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchNavBar from './SearchNavBar';

import { Button } from 'react-bootstrap';

class SearchPage extends Component {
    constructor(){
        super();
        this.state = {
            userInput: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            userInput: e.target.value,
        })
        console.log(e.target.value)
    }
    render() {
        return (
            <div className='main_div'>
                <SearchNavBar/>
                <div className='search_page_div' style={{paddingTop: '5vh'}}>
                    <h1>Character Search</h1>
                    <form className='search_form'>
                        <input 
                            className='search_input'
                            type="text" 
                            placeholder='name of character'
                            onChange={this.handleChange}
                        />
                        <Link to={`/results/:${this.state.userInput}`}>
                            <Button className='search_btn'>SEARCH</Button>
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchPage;