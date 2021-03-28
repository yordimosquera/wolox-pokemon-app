import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import InputText from '../InputText';
import ItemList from '../ItemList';
import './styles.scss';

const AutoComplete = ({ options, onChange, placeHolder, ...rest }) => {
  const [autoCompleteOptions, setAutoCompleteOptions] = useState({
    filteredOptions: [],
    showOptions: false,
    userInput: ''
  });

  const ItemsMemorized = ({ key, onClick, option }) =>
    useMemo(() => <ItemList option={option} onClick={onClick} key={key} />);

  const onChangeInput = e => {
    const userInput = e.currentTarget.value;

    const filteredOptions = options.filter(
      option => option.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setAutoCompleteOptions({
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value
    });
  };

  const onClick = e => {
    setAutoCompleteOptions({
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText
    });
    onChange(e.currentTarget.innerText);
  };

  const { filteredOptions, showOptions, userInput } = autoCompleteOptions;
  let optionList;
  if (showOptions && userInput) {
    if (filteredOptions.length > 0) {
      optionList = (
        <ul className="options">
          {filteredOptions.map((option, index) => {
            return (
              <ItemsMemorized key={index} onClick={onClick} option={option} />
            );
          })}
        </ul>
      );
    } else {
      optionList = (
        <div className="no-options">
          <em>{'No Option!'}</em>
        </div>
      );
    }
  }
  return (
    <div className="search">
      <InputText
        {...rest}
        onChange={onChangeInput}
        value={userInput}
        placeHolder={placeHolder}
      ></InputText>
      {optionList}
    </div>
  );
};

AutoComplete.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  placeHolder: PropTypes.string
};

export default AutoComplete;
