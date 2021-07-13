import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './Navbar.styles';
import nasaLogo from '../../assets/img/nasa-logo.svg';

const Navbar = (props) => {
  return (
    <Wrapper className='bg-gray-100'>
      <Content>
        <div className='p-1 text-md'>
          <img id='nasa-logo' src={nasaLogo} alt='Nasa Logo' />
          <h1 id='nasa-title'>
            Nasa <span>Image</span> Finder
          </h1>
        </div>
        <div id='githubIcon' style={{ color: 'var(--nasa-blue)' }}>
          <i className={props.gitHubIcon} />
        </div>
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
