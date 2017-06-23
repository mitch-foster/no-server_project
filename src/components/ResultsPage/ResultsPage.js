import React, { Component } from 'react';
import axios from 'axios';
import md5 from 'js-md5';

import NavBar from './NavBar'

import keys from './keys.js'
import spiderman from './spiderman.jpg'

class ResultsPage extends Component {
    // componentDidMount();
    constructor(props){
        super(props)
        this.state = {
            name: this.props.match.params.name.split(':').pop(),
            results: []  
        }
    }

    componentDidMount() {

        const time = new Date();
        const timeStamp = time.toString();

        const hash = `${timeStamp}${keys.privateKey}${keys.publicKey}`

        const newHash = md5(hash);
        
        const marvelURL = `
    https://gateway.marvel.com:443/v1/public/characters?name=${this.state.name}&ts=${timeStamp}&apikey=${keys.publicKey}&hash=${newHash}
` 
    
        return axios.get(marvelURL)
            .then(response => {
                console.log("RESPONSE",response)
                // console.log("old state", this.state.results)
                this.setState({
                    results: response.data.data.results
                })
                console.log("new state", this.state.results)
            })


    }

    render() {
        // const promise = AxiosFunction(this.state.name);
        // console.log(promise);
        // console.log(this.props.match.params.name.split(':').pop())
        return (
            <div className='main_div'>
                <NavBar/>
                <div className='component_div'>
                    <h2>{this.state.name}</h2>
                    <img className='charcter_image' src={spiderman} alt="Spider-Man"/>
                    <p className='results_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quisquam mollitia excepturi sapiente dolore nesciunt aliquam odio magni eligendi, non rerum est cum architecto laboriosam a saepe quas inventore. Quis?</p>
                    Results:
                </div>
            </div>
        ); 
    }
}

export default ResultsPage;