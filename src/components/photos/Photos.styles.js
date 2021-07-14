import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  justify-content: space-between;

  @media screen and (min-width: 780px) {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 900px) {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
