import React, { useEffect, useState} from 'react';

import PokemonCard from '../../components/pokemon/pokemon-card';

const Pokedex = (props) => {
    const { pokemons, setLoading } = props;

    return (
        <div className='pokedex__container'>
            <div className='pokedex__grid'>
            {
                pokemons.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))
            }
            </div>
            Hello
        </div>
    )
};

export default Pokedex;