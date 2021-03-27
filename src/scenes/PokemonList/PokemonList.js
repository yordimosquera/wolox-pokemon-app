import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
import MainLogo from '../../components/MainLogo';
import woloxLogo from '../../assets/images/logo_full_color.svg';
import pokeball from '../../assets/images/Pokeball.png';

import { ELEMENTS_PER_PAGE_OPTIONS } from '../../constants';
import './styles.scss';

const PokemonList = ({
  getPokemon = () => {},
  pokemon = {},
  getPokemonByIdOrName,
  error,
  getPokemonDetails,
  pokemonChosedDetails,
  setPokemonTeamChoosed
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [nameOrId, setNameOrId] = useState('');

  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    elementsPerPage: 20,
    offset: 0,
    limit: 20
  });
  const [pokemonChosed, setPokemonChosed] = useState([]);

  const { results: pokemonList = [], count = 0 } = pokemon;

  const onSubmit = nameOrId => {
    getPokemonByIdOrName(nameOrId);
  };

  const onChange = param => {
    setNameOrId(param);
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
    setPokemonTeamChoosed(name, pokemonChosedDetails);
  };

  const getPokemonChosedDetails = () => {
    getPokemonDetails(pokemonChosed);
    setIsModalVisible(true);
  };

  const restoreSearch = () => {
    getPokemon({ limit: 20, offset: 0 });
    setNameOrId('');
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
      <MainLogo route={'/'} logo={woloxLogo} size={'big-logo'} />
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
      <div className="search-container">
        <InputText
          value={nameOrId}
          placeHolder={'name or id'}
          onChange={e => onChange(e.target.value)}
        >
          <BiSearchAlt2 />
        </InputText>

        <Button buttonStyle={'btn--primary'} onClick={() => onSubmit(nameOrId)}>
          {'Buscar'}
        </Button>
        <Button buttonStyle={'btn--primary'} onClick={() => restoreSearch()}>
          {'Restablecer'}
        </Button>
      </div>
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
        {error ? (
          <ErrorText
            message={'No se encontró ningún pokemon con ese nombre 🙃'}
          />
        ) : (
          Array.isArray(pokemonList) &&
          pokemonList.length > 0 &&
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
        )}
      </div>

      <div className="pagination-container">
        <CustomSelect
          options={ELEMENTS_PER_PAGE_OPTIONS}
          handleChange={e => {
            getElementsPerPage(e.target.value);
          }}
        />
        <div style={{ width: '500px', fontFamily: 'Montserrat Regular' }}>
          <Pagination
            totalPosts={count}
            postsPerPage={paginationData.elementsPerPage}
            paginate={paginate}
            showLast={true}
            showFirst={true}
            showIndex={true}
            showFirstText={'Show First'}
            view={3}
            indexbgColor={'#98cf00'}
          />
        </div>
      </div>
    </div>
  );
};

PokemonList.propTypes = {
  getPokemon: PropTypes.func,
  pokemon: PropTypes.object,
  getPokemonByIdOrName: PropTypes.func,
  error: PropTypes.object,
  getPokemonDetails: PropTypes.func,
  pokemonChosedDetails: PropTypes.array,
  setPokemonTeamChoosed: PropTypes.func
};

export default PokemonList;
