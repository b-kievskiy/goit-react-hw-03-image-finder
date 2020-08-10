import React from 'react';
import PropTypes from 'prop-types';

function Modal({ url, modalClick }) {
  return (
    <div className="Overlay" onClick={modalClick}>
      <div className="Modal">
        <img src={url} alt="" />
      </div>
    </div>
  );
}

Modal.propType = {
  url: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
};

export default Modal;
