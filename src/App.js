import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { getPokemon } from './redux/PokemonSlice/pokemonSlice';

function App() {
  const dispatch = useDispatch();
  const  pokemonsNames  = useSelector((store) => store.pokemonsNames);
  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
