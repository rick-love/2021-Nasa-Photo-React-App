import React from 'react';
import PhotoItem from './PhotoItem';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { Wrapper } from './Photos.styles';

const Photos = ({ photos, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Wrapper className='p-4 grid grid-flow-row'>
        {photos.map((photo) => (
          <PhotoItem key={photo.title} photo={photo} />
        ))}
      </Wrapper>
    );
  }
};

Photos.propTypes = {
  photos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Photos;
