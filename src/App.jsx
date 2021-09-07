import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Pokedex from './pages/pokedex/pokedex';

import LoadingHOC from './utils/loadingHOC';
import { fetchDataFromUrl } from './utils/fetchDataFromURL';

import './App.css';

const PokedexHOC = LoadingHOC(Pokedex);

const App = () => {
  const[pokemonUrl, setPokemonUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const[pokemons, setPokemons] = useState([]);
  const[isLoading, setIsLoading] = useState(true);

  const fetchPokemons = (total, url) => {
    let fetchPokemonPromises = [];
    let pokemonArray = [];
    for (let i = 1; i <= total; i++) {
        fetchPokemonPromises.push(
            fetchDataFromUrl(`${url}${i}`).then((pokemon) => {
                pokemonArray.push(pokemon);
            })
        );
    }
    Promise.all(fetchPokemonPromises).then(() => {
        setPokemons(pokemons => pokemonArray);
        setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchPokemons(150, pokemonUrl);
  }, []);

  return (
    <div className="App">
      <div className="main__container">
        <Router>
          <Switch>
            <Route exact path = '/' component={() => <PokedexHOC pokemons={pokemons} /> } />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
