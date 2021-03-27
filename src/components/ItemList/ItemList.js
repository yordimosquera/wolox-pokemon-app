import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ItemList = ({ option, key, onClick, className }) => (
  <li className={className} key={key} onClick={onClick}>
    <img className={'img-flag'} src={option.flag} />
    {option.name}
  </li>
);

ItemList.propTypes = {
  option: PropTypes.object,
  key: PropTypes.number,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default ItemList;
