import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  PhotoTitle,
  PhotoImage,
  PhotoExplanation,
} from './PhotoItem.styles';

const PhotoItem = ({ photo: { explanation, title, url } }) => {
  return (
    <Wrapper className=''>
      <div>
        <PhotoTitle className='p-4 font-bold text-lg'>{title}</PhotoTitle>
      </div>
      <div className='grid grid-cols-1'>
        <PhotoImage className='md:h-60 w-full bg-cover' src={url} alt='' />
        <PhotoExplanation className='p-3'>{explanation}</PhotoExplanation>
      </div>
    </Wrapper>
  );
};

PhotoItem.propTypes = {
  photo: PropTypes.object,
};

export default PhotoItem;
