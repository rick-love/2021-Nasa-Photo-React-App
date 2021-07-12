import React, { Component } from 'react';
import { Wrapper, PhotoTitle, PhotoImage, PhotoExplanation } from './PhotoItem.styles';

class PhotoItem extends Component {
state = { };


  render() {
       const { explanation, title, url } = this.props.photo;
    return (
      <Wrapper>
        <PhotoTitle className='text-2xl p-3 font-normal m-4 leading-normal'>{title}</PhotoTitle>
        <PhotoImage className='p-4' src={url} alt='' />
        <PhotoExplanation className='p-3' >{explanation}</PhotoExplanation>
      </Wrapper>
    );
  }
}

export default PhotoItem;
