import React from 'react';
import './styles.scss';

const PokemonDetailCard = ({
  name,
  id,
  sprites: { front_default },
  types,
  weight,
  height,
  moves
}) => (
  <div className="detail-card">
    <img src={front_default} className="pokemon-detail-card--image" />
    <p>{name}</p>
    <p>{`# ${id}`}</p>
    <p>{'Types: '}</p>
    {types.map((item, index) => (
      <p key={index}>{`- ${item.type.name}`}</p>
    ))}
    <p>{`Height: ${height}`}</p>
    <p>{`weight: ${weight}`}</p>
    <p>{'Moves: '}</p>
    {moves
      .filter((item, index) => index <= 3)
      .map((item, index) => (
        <p key={index}>{`- ${item.move.name}`}</p>
      ))}
  </div>
);

export default PokemonDetailCard;
