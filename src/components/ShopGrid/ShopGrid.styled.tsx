import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-gap: 1vmin;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
`;
