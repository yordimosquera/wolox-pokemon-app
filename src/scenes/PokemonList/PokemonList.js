import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { BiSearchAlt2 } from 'react-icons/bi';
import { CgPokemon } from 'react-icons/cg';
import { Pagination } from 'react-custom-pagination';
import { FaTimes } from 'react-icons/fa';

import Button from '../../components/Button';
import InputText from '../../components/InputText';
import ErrorText from '../../components/ErrorText';
import Modal from '../../components/Modal';
import PokemonDetailCard from './PokemonDetailCard';
import CustomSelect from '../../components/CustomSelect';
import Card from '../../components/Card/Card';
import pokeball from '../../assets/images/Pokeball.png';

import { ELEMENTS_PER_PAGE_OPTIONS } from '../../constants';
import './styles.scss';

const PokemonList = ({ pokemonContext }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    elementsPerPage: 20,
    offset: 0,
    limit: 20
  });
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
  const { results: pokemonList = [], count = 0 } = pokemon;

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

  const restoreSearch = () => {
    getPokemon({ limit: 20, offset: 0 });
    setPaginationData({
      currentPage: 1,
      elementsPerPage: 20,
      offset: 0,
      limit: 20
    });
  };

  const paginate = pageNumber => {
    const { elementsPerPage } = paginationData;
    const newLimit = pageNumber * elementsPerPage;
    const newOffset = newLimit - elementsPerPage;
    getPokemon({ limit: elementsPerPage, offset: newOffset });
    setPaginationData({
      currentPage: pageNumber,
      limit: elementsPerPage,
      offset: newOffset,
      elementsPerPage
    });
  };

  const getElementsPerPage = value => {
    setPaginationData({ ...paginationData, elementsPerPage: value });
    getPokemon({ limit: value, offset: 0 });
  };

  return (
    <div className="pokemonlist">
      {isModalVisible && (
        <Modal>
          <div className="pokemon-detail">
            {pokemonChosedDetails.map((item, index) => (
              <PokemonDetailCard
                key={index}
                {...item}
                onClick={() => {
                  removePokemonChosed(item.name);
                }}
                buttonText={'Remove'}
              />
            ))}
            <FaTimes
              className="modal-icon"
              onClick={() => {
                setIsModalVisible(false);
              }}
            />
          </div>
        </Modal>
      )}
      <form className="search-container" onSubmit={handleSubmit(onSubmit)}>
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
        <Button
          buttonStyle={'btn--primary'}
          type="submit"
          onClick={() => restoreSearch()}
        >
          {'Restablecer'}
        </Button>
      </form>
      <div
        className="pokemon-team"
        onClick={() => {
          if (pokemonChosed.length > 0) getPokemonChosedDetails();
        }}
      >
        <CgPokemon />
        <div className="pokemon-choosed">
          <span>{pokemonChosed.length}</span>
        </div>
      </div>

      <div className="pokemon-list-container">
        {Array.isArray(pokemonList) && pokemonList.length > 0 ? (
          pokemonList.map((item, index) => (
            <Card
              key={index}
              image={pokeball}
              text={item.name}
              buttonText={'Choose'}
              onClick={() =>
                addPokemonChosed({ url: item.url, name: item.name })
              }
            />
          ))
        ) : (
          <p>{'No se encontró ningún pokemon'}</p>
        )}
      </div>

      <div className="pagination-container">
        <CustomSelect
          options={ELEMENTS_PER_PAGE_OPTIONS}
          handleChange={e => {
            getElementsPerPage(e.target.value);
          }}
        />
        <div style={{ width: '500px' }}>
          <Pagination
            totalPosts={count}
            postsPerPage={paginationData.elementsPerPage}
            paginate={paginate}
            showLast={true}
            showFirst={true}
            showIndex={true}
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
