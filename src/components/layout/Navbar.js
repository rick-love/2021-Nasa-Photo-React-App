import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content, NavTitle, NavImage, NavIcon } from './Navbar.styles';
import nasaLogo from '../../assets/img/nasa-logo.svg';

const Navbar = (props) => {
  return (
    <Wrapper className='bg-gray-100'>
      <Content>

          <NavImage id='nasa-logo' src={nasaLogo} alt='Nasa Logo' />
          <NavTitle id='nasa-title'>
            Nasa <span>Image</span> Finder
          </NavTitle>

        <NavIcon id='githubIcon'>
          <i className={props.gitHubIcon} />
        </NavIcon>
      </Content>
    </Wrapper>
  );
};

Navbar.defaultProps = {
  gitHubIcon: 'fab fa-github fa-2x',
};
Navbar.propTypes = {
  gitHubIcon: PropTypes.string.isRequired,
};

export default Navbar;
