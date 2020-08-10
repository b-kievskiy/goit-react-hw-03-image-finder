import React from 'react';
import Loader from 'react-loader-spinner';

const PreLoader = () => {
  return (
    <Loader
      type="Puff"
      color="#25dfdf"
      height={640}
      width={640}
      timeout={3000} //3 secs
      className="loader"
    />
  );
};

export default PreLoader;
