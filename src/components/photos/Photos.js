import React from 'react';
import PhotoItem from './PhotoItem';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

const Photos = ({ photos, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='p-4 grid grid-flow-row md:grid-flow-col md:gap-4'>
        {photos.map((photo) => (
          <PhotoItem key={photo.title} photo={photo} />
        ))}
      </div>
    );
  }
};

Photos.propTypes = {
  photos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Photos;
