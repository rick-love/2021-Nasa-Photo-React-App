import styled from 'styled-components';

export const Wrapper = styled.nav`
  padding: 0.7rem 2rem;
  z-index: 1;
  width: 100%;
  opacity: 0.9;
  margin-bottom: 1rem;
  box-shadow: var(--box-shadow);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2.5rem;
  font-weight: 600;

  span {
    color: var(--nasa-orange);
  }
  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'logo icon'
      'title title';
    justify-content: center;
    justify-items: center;
  }
`;

export const NavImage = styled.img``;
export const NavTitle = styled.h1`
  color: var(--nasa-blue);
  text-align: center;
  grid-area: title;
`;
export const NavIcon = styled.div`
  color: var(--nasa-blue);
  grid-area: icon;
`;
