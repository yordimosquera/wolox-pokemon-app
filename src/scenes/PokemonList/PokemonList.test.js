import { render } from '@testing-library/react';
import { assert, spy } from 'sinon';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import PokemonList from './PokemonList';
import { Router } from 'react-router';

describe('PokemonList', () => {
  const pokemon = {
    count: 1118,
    next: 'https://pokeapi.co/api/v2/pokemon/?offset=40&limit=20',
    previous: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20',
    results: [
      {
        name: 'spearow',
        url: 'https://pokeapi.co/api/v2/pokemon/21/'
      },
      {
        name: 'fearow',
        url: 'https://pokeapi.co/api/v2/pokemon/22/'
      },
      {
        name: 'ekans',
        url: 'https://pokeapi.co/api/v2/pokemon/23/'
      }
    ]
  };

  const pokemonContext = {
    getPokemon: spy(),
    pokemon,
    getPokemonByIdOrName: spy(),
    error: false,
    getPokemonDetails: spy(),
    pokemonChosedDetails: spy()
  };
  const history = createMemoryHistory();

  const makeWrapper = (newProps = {}) => {
    const defaultProps = {
      ...pokemonContext
    };
    const props = Object.assign({}, defaultProps, newProps);

    const wrapper = render(
      <Router history={history}>
        <PokemonList {...props} />
      </Router>
    );
    return { props, wrapper };
  };

  it('Should call the getPokemon prop', () => {
    const { wrapper, props } = makeWrapper();
    assert.calledWithExactly(props.getPokemon, { limit: 20, offset: 0 });
  });
});
