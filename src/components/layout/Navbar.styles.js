import styled from 'styled-components';

export const Wrapper = styled.nav`
  border: solid 1px red;
  display: grid;
  grid-template-areas:
    'logo icon'
    'title title';

  padding: 0.7rem 2rem;
  z-index: 1;
  width: 100%;
  opacity: 0.9;
  margin-bottom: 1rem;
  box-shadow: var(--box-shadow);
`;

export const Content = styled.div`
  font-size: 2.5rem;
  font-weight: 600;

  h1 {
    color: var(--nasa-blue);
  }
  span {
    color: var(--nasa-orange);
  }
`;
