import React, { Component } from 'react'

import User from '../interfaces/User.interface'
import { number } from 'prop-types';


interface SearchState{
    name: string,
    numberOfAbilities: number,
    baseExperience: number,
    imageUrl: string,
    error: boolean
}

export class PokemonSearch extends Component<User, SearchState> {
    pokemonRef: React.RefObject<HTMLInputElement>

    constructor(props: User ){
        super(props)
        this.state = {
            error: false,
            name: '',
            numberOfAbilities: 0,
            baseExperience: 0,
            imageUrl: ''
        }
        this.pokemonRef = React.createRef();
    }
    onSearchClick = () =>{
        const inputValue = this.pokemonRef.current.value;
        fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
        .then( res => {
            if(res.status !== 200){
                this.setState({
                    error: true
                })
            }
        })


        console.log('clicked')
    }

    render() {
        const { name, numberOfPokemons} = this.props;

        return (
            <div>
                <p>User {name} {numberOfPokemons && <span>has { numberOfPokemons } pokemons</span>} </p>
                <input type="text" ref={this.pokemonRef}/>
                <button onClick={this.onSearchClick}>Search</button>
            </div>
        )
    }
}

export default PokemonSearch
