import React, { Component } from 'react';
import axios from 'axios';
import md5 from 'js-md5';

import NavBar from './NavBar'

import keys from './keys.js'
import marvel_logo from '../../marvel_logo.png'

class ResultsPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: this.props.match.params.name.split(':').pop(),
            results: [],
            thumbnail: '',
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
                let thumb_nail = response.data.data.results[0] === undefined
                                    ? 'http://logodatabases.com/wp-content/uploads/2012/04/marvel-logo.jpg'
                                    : `${response.data.data.results[0].thumbnail.path}.${response.data.data.results[0].thumbnail.extension}`
                this.setState({
                    results: response.data.data.results[0] 
                            || {
                                    name: 'Check your spelling', 
                                    description: "It seems you have either miss-spelled the character's name (hint: if the character's name is two words try using a \"-\"), or this character is not part of the Marvel Universe",
                                    thumbnail: 'http://logodatabases.com/wp-content/uploads/2012/04/marvel-logo',
                                },
                    thumbnail: thumb_nail
                                
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
                    <div className='results_div'>
                        <h2>{this.state.results.name}</h2>
                        <img 
                            className='charcter_image' 
                            src=
                                {
                                    this.state.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
                                    ? marvel_logo : this.state.thumbnail

                                } 
                        />
                        <p className='results_p'>
                            {
                                this.state.results.description 
                                || 
                                <h4>For more info on {this.state.results.name} visit the Maravel Universe <a target="_blank" href="http://marvel.com/universe/">Wiki</a></h4>
                            }

                        </p>
                    </div>
                    <div className='resutls_page_footer'>
                        <p>Data provided by <a target="_blank" href="http://marvel.com\">Marvel</a>. © 2017 MARVEL</p>
                    </div>
                </div>
            ); 
        }
}

export default ResultsPage;