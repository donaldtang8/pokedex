import React from 'react';

const PokemonCard = (props) => {
    const { pokemon } = props;
    
    return (
        <div className="pokemon-card__container">
            <div className="pokemon-card__picture">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div className="pokemon-card__details">
            <div className="pokemon-card__name">{pokemon.name}</div>
                <div className="pokemon-card__types">
                {
                    pokemon.types.map(type => (
                        <div className={`pokemon-card__type pokemon-card__type--${type.type.name}`}>{type.type.name}</div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default PokemonCard;