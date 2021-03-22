import React, { useContext, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { BiSearchAlt2 } from 'react-icons/bi';

import ElementList from '../../components/ElementList/ElementList';
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import ErrorText from '../../components/ErrorText';
import Modal from '../../components/Modal';
import PokemonDetailCard from './PokemonDetailCard';
import PokemonContext from '../../store/Pokemon/context';

const PokemonList = () => {
  const pokemonContext = useContext(PokemonContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pokemonChosed, setPokemonChosed] = useState([]);
  const { handleSubmit, control } = useForm();
  const {
    getPokemon,
    pokemon,
    getPokemonByIdOrName,
    error,
    status,
    getPokemonDetails,
    pokemonChosedDetails
  } = pokemonContext;
  const { results: pokemonList = [] } = pokemon;

  const onSubmit = ({ nameOrId }) => {
    getPokemonByIdOrName(nameOrId);
  };

  useEffect(() => {
    getPokemon({ limit: 20, offset: 0 });
  }, []);

  const addPokemonChosed = ({ url, name }) => {
    const pokemonFound = pokemonChosed.find(item => item.name === name);
    if (pokemonChosed.length < 3 && !pokemonFound)
      setPokemonChosed([...pokemonChosed, { url, name }]);
  };

  const removePokemonChosed = name => {
    const pokemonChosedFiltered = pokemonChosed.filter(
      item => item.name !== name
    );
    setPokemonChosed(pokemonChosedFiltered);
  };

  const getPokemonChosedDetails = () => {
    getPokemonDetails(pokemonChosed);
    setIsModalVisible(true);
  };

  return (
    <>
      {isModalVisible && (
        <Modal>
          <div>
            {pokemonChosedDetails.map((item, index) => (
              <PokemonDetailCard key={index} {...item} />
            ))}
            <Button
              buttonStyle={'btn--primary'}
              type="submit"
              onClick={() => setIsModalVisible(false)}
            >
              {'Regresar'}
            </Button>
          </div>
        </Modal>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name={'nameOrId'}
          control={control}
          defaultValue={''}
          render={props => (
            <InputText placeHolder={'name or id'} {...props}>
              <BiSearchAlt2 />
            </InputText>
          )}
        />
        {error && <ErrorText message={'No pokemon with that name or id'} />}
        <Button buttonStyle={'btn--primary'} type="submit">
          {'Buscar'}
        </Button>
      </form>
      <Button
        buttonStyle={'btn--primary'}
        type="submit"
        onClick={() => getPokemon({ limit: 20, offset: 0 })}
      >
        {'Restablecer'}
      </Button>
      <h3>{'My team'}</h3>
      {pokemonChosed.map((item, index) => (
        <ElementList
          name={item.name}
          url={item.url}
          buttonText={'-'}
          key={index}
          onClick={() => removePokemonChosed(item.name)}
        />
      ))}
      <Button
        buttonStyle={'btn--primary'}
        type="submit"
        onClick={() => getPokemonChosedDetails()}
      >
        {'Comparar'}
      </Button>
      {Array.isArray(pokemonList) && pokemonList.length > 0 ? (
        pokemonList.map((item, index) => (
          <ElementList
            name={item.name}
            url={item.url}
            buttonText={'+'}
            key={index}
            onClick={() => addPokemonChosed({ url: item.url, name: item.name })}
          />
        ))
      ) : (
        <p>{'No se encontró ningún pokemon'}</p>
      )}
    </>
  );
};

export default PokemonList;
