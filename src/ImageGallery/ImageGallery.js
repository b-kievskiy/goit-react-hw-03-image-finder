import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';

export class ImageGallery extends Component {
  state = {
    isModal: false,
    src: '',
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    window.removeEventListener('keypdown', this.handleKeyPress);
  }

  openModal = () => this.setState({ isModal: true });
  closeModal = () => this.setState({ isModal: false });

  handleKeyPress = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.closeModal();
  };

  itemClick = e => {
    if (e.target.nodeName !== 'IMG') {
      return;
    } else {
      const clickedSrc = e.target.dataset.src;
      this.setState({ src: clickedSrc });
      this.openModal();
    }
  };

  modalClick = e => {
    if (e.currentTarget.nodeName !== 'DIV' || e.target.nodeName !== 'IMG') {
      this.closeModal();
    } else {
      return;
    }
  };

  render() {
    const { imageArray } = this.props;
    const { isModal, src } = this.state;
    return (
      <>
        {isModal ? (
          <Modal url={src} modalClick={this.modalClick} />
        ) : (
          <ul className="ImageGallery" onClick={this.itemClick}>
            {imageArray.map(({ id, webformatURL, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                webFormatURL={webformatURL}
                largeImageURL={largeImageURL}
              />
            ))}
          </ul>
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  imageArray: PropTypes.array.isRequired,
};
