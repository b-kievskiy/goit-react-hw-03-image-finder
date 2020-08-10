import React from 'react';
import PropTypes from 'prop-types';

function ImageGalleryItem({ webFormatURL, largeImageURL }) {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webFormatURL}
        alt=""
        data-src={largeImageURL}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webFormatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
