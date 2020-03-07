import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(max(159px, 21%), 1fr));
`;
