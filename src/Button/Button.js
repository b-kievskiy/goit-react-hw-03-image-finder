import React from 'react';
import PropTypes from 'prop-types';

function Button({ btnClick }) {
  return (
    <button className="Button" onClick={btnClick}>
      Load more
    </button>
  );
}

Button.propTypes = {
  btnClick: PropTypes.func.isRequired,
};

export default Button;
