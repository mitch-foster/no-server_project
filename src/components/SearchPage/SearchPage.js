import React, { Component } from 'react';

class SearchPage extends Component {
    render() {
        return (
            <div className='main_div'>
                {/*<Nav/>*/}
                <h1>Hero Search</h1>
                <form>

                    <input className='search_input'type="text" placeholder='name of hero'/>
                    <button className='search_btn'>SEARCH</button>

                </form>
            </div>
        );
    }
}

export default SearchPage;