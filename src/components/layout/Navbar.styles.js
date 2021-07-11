import styled from 'styled-components';


export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  display: flex;
  align-items: center;

  h1{
    color: var(--nasa-blue);
  }
  span{
    color: var(--nasa-orange);
  }
`;
