import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import PreLoader from './Loader/Loader';

const key = '16012564-983777c468f78516fc9320c6b';

export class App extends Component {
  state = {
    imagesList: [],
    query: 'grass',
    page: 1,
    isLoading: false,
  };

  componentDidMount() {
    this.getImages();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.getImages();
    }
  }

  onSubmit = search => {
    this.setState({ query: search, page: 1, imagesList: [] });
  };

  getImages() {
    const { query, page } = this.state;
    const reqest = `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
    this.setState({ isLoading: true });
    fetch(reqest)
      .then(respons => respons.json())
      .then(results =>
        results.hits.map(({ id, webformatURL, largeImageURL }) => ({
          id,
          webformatURL,
          largeImageURL,
        })),
      )
      .then(data => {
        this.setState(prev => ({ imagesList: [...prev.imagesList, ...data] }));
        return data;
      })
      .then(data => this.scrollDown())
      .catch(error => console.log('Error = ', error))
      .finally(() => this.setState({ isLoading: false }));
  }

  btnClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  scrollDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { imagesList, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery imageArray={imagesList} />
        {isLoading && <PreLoader />}
        <Button btnClick={this.btnClick} />
      </>
    );
  }
}
