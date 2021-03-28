import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Modal = ({ children }) => (
  <div className="modal-container">
    <div className="modal">{children}</div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.node
};

export default Modal;
