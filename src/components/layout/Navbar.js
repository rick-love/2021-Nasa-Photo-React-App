import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './Navbar.styles';
import nasaLogo from '../../assets/img/nasa-logo.svg';

const Navbar = () => {
  return (
    <Wrapper className='bg-gray-100'>
      <Content>
        <img src={nasaLogo} alt='Nasa Logo' />
        <h1>Nasa <span>Image</span> Finder</h1>
      </Content>
    </Wrapper>
  );
};


export default Navbar;
