import React from 'react';
import Button from '../../../components/Button';
import './styles.scss';

const PokemonDetailCard = ({
  name,
  id,
  sprites: { front_default },
  types,
  weight,
  height,
  moves,
  onClick,
  buttonText
}) => (
  <div className="detail-card">
    <div className="img-container">
      <img src={front_default} className="pokemon-detail-card--image" />
    </div>
    <p>
      {name}
      <span>{`  #${id}`}</span>
    </p>
    <p>{`Types: `}</p>
    <ul>
      {types.map((item, index) => (
        <li key={index}>{item.type.name}</li>
      ))}
    </ul>
    <p>{`Height:   ${height} ft`}</p>
    <p>{`Weight:   ${weight} lbs`}</p>
    <p>{'Moves: '}</p>

    <ul>
      {moves.slice(0, 4).map((item, index) => (
        <li key={index}>{item.move.name}</li>
      ))}
    </ul>
    <Button onClick={onClick} buttonStyle="btn--outline">
      {buttonText}
    </Button>
  </div>
);

export default PokemonDetailCard;
