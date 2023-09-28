import { configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from './PokemonSlice/pokemonSlice';

const rootReducer = {
  pokemons: pokemonsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
