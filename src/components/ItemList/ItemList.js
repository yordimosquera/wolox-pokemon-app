import React from 'react';
import './styles.scss';

const ItemList = ({ option, key, onClick, className }) => (
  <li className={className} key={key} onClick={onClick}>
    <img className={'img-flag'} src={option.flag} />
    {option.name}
  </li>
);

export default ItemList;
