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
            results: [],
            thumbnail: '',
            charImages: ['thorUrl', 'spidermanUrl', '']
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
    
        axios.get(marvelURL)
            .then(response => {
                console.log("RESPONSE",response)
                // console.log("old state", this.state.results)
                this.setState({
                    results: response.data.data.results[0],
                    thumbnail: `${response.data.data.results[0].thumbnail.path}.${response.data.data.results[0].thumbnail.extension}`
                })

                console.log("name", this.state.results.name)
                console.log("description", this.state.results.description)
                console.log("thumbnail", this.state.results.thumbnail.path)
                console.log("thumbnailState", this.state.thumbnail)
            })


    }
        render() {
            
            return (
                <div className='main_div'>
                    <NavBar/>
                    <div className='component_div' style={{height: '90vh'}}>
                        <h2>{this.state.results.name}</h2>
                        <img className='charcter_image' src={this.state.thumbnail} alt="{this.state.results.name}"/>
                        <p className='results_p'>{this.state.results.description}</p>
                    </div>
                    <div style={{height: '5vh', backgroundColor: '#f7f5f4'}}>
                        <p>Data provided by <a href="http://marvel.com\" >Marvel</a>. © 2017 MARVEL</p>
                    </div>
                </div>
            ); 
        }
}

export default ResultsPage;