import React, { useState, useMemo } from 'react';
import ItemList from '../ItemList';
import './styles.scss';

const AutoComplete = ({ options, onChange, ...rest }) => {
  const [autoCompleteOptions, setAutoCompleteOptions] = useState({
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: ''
  });

  const ItemsMemorized = ({ className, key, onClick, option }) =>
    useMemo(() => (
      <ItemList
        option={option}
        onClick={onClick}
        className={className}
        key={key}
      />
    ));

  const onChangeInput = e => {
    const userInput = e.currentTarget.value;

    const filteredOptions = options.filter(
      option => option.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setAutoCompleteOptions({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value
    });
  };

  const onClick = e => {
    setAutoCompleteOptions({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText
    });
    onChange(e.currentTarget.innerText);
  };

  const onKeyDown = e => {
    const { activeOption, filteredOptions } = autoCompleteOptions;

    // keyCode for enter
    if (e.keyCode === 13) {
      setAutoCompleteOptions({
        ...autoCompleteOptions,
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption]
      });
      // keyCode for space
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      setAutoCompleteOptions({
        ...autoCompleteOptions,
        activeOption: activeOption - 1
      });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        return;
      }
      setAutoCompleteOptions({
        ...autoCompleteOptions,
        activeOption: activeOption + 1
      });
    }
  };

  const {
    activeOption,
    filteredOptions,
    showOptions,
    userInput
  } = autoCompleteOptions;
  let optionList;
  if (showOptions && userInput) {
    if (filteredOptions.length) {
      optionList = (
        <ul className="options">
          {filteredOptions.map((option, index) => {
            let className;
            if (index === activeOption) {
              className = 'option-active';
            }
            return (
              <ItemsMemorized
                className={className}
                key={index}
                onClick={onClick}
                option={option}
              />
            );
          })}
        </ul>
      );
    } else {
      optionList = (
        <div className="no-options">
          <em>No Option!</em>
        </div>
      );
    }
  }
  return (
    <>
      <div className="search">
        <input
          type="text"
          className="search-box"
          {...rest}
          onChange={onChangeInput}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        <input type="submit" value="" className="search-btn" />
      </div>
      {optionList}
    </>
  );
};

export default AutoComplete;
