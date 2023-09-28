/* eslint-disable prefer-destructuring */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPokemon = createAsyncThunk(
  'pokemons/getPokemon',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1010');
      const pokemonNames= response.data.results;
      console.log(pokemonNames);
      const pokemondataresponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNames[0].name}`);
      const pokemondata = pokemondataresponse.data;
      console.log(pokemondata);
      return pokemonNames;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);
const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState: {
    pokemonsNames: [],
    pokemons: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemon.fulfilled, (state, action) => {
      state.pokemonsNames = action.payload;
    });
  },
})

export default pokemonSlice.reducer;