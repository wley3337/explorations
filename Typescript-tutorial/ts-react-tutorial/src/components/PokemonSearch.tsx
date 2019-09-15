import React, { Component } from 'react'

import User from '../interfaces/User.interface'
import { number } from 'prop-types';


interface SearchState{
   pokemon: Pokemon,
    error: boolean
}

interface Pokemon{
    name: string,
    numberOfAbilities: number,
    baseExperience: number,
    imageUrl: string
}

interface Stuff{
    name: string,
    age: number,
    loggedIn: boolean
}
const foo: (string|number|boolean)[] = [1, "this", 32, 233, "that", true]

export class PokemonSearch extends Component<User, SearchState, Stuff> {
    pokemonRef: React.RefObject<HTMLInputElement>
    
    constructor(props: User ){
        super(props)
        this.state = {
            error: false,
            pokemon: null
        }
        this.pokemonRef = React.createRef();
    }
    onSearchClick = () =>{
        const inputValue = this.pokemonRef.current.value;
        fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
        .then( res => {
            if(res.status !== 200){
                this.setState({error: true });
                return
            }
            res.json().then(data =>{
                this.setState({
                    error: false,
                    pokemon: {
                        name: data.name,
                        numberOfAbilities: data.abilities.length,
                        baseExperience: data.base_experience,
                        imageUrl: data.sprites.front_default 
                    }
                })
            })
        })
    }
    
    render() {
        const bar: Stuff = { name: "this", age: 25, loggedIn: true}
        const { name: userName, numberOfPokemons} = this.props;
        const {error, pokemon } = this.state;
        let resultMarkup;
        
        if(error){
            resultMarkup = <p>Pokemon not found please try again</p>
        }else if(this.state.pokemon){
            resultMarkup = <div>
                <img src={pokemon.imageUrl} alt="pokemon" className="pokemon-image"/>
                <p>{pokemon.name} has {pokemon.numberOfAbilities} has base experience {pokemon.baseExperience} </p>
            </div>
        }
        
        return (
            <div>
            {bar}
                <p>User {userName}{' '} {numberOfPokemons && <span>has { numberOfPokemons } pokemons</span>} </p>
                <input type="text" ref={this.pokemonRef}/>
                <button onClick={this.onSearchClick}>Search</button>
                {resultMarkup}
            </div>
        )
    }
}

export default PokemonSearch
