import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

const PokemonApp = () => {
  const dispatch = useDispatch();
  const { isLoading, page, pokemons } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div>
      <h1>PokemonApp</h1>
      <h3>Loading: {isLoading ? 'True' : 'False'}</h3>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Get pokemons
      </button>
    </div>
  );
};

export default PokemonApp;
