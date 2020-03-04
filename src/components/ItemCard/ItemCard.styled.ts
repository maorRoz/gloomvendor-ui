import styled from 'styled-components';

export const Card = styled.div`
  justify-self: stretch;
  border: 1px solid black;
`;

export const CardImageLayout = styled.div`
  border: 1px solid green;
  width: fit-content;
`;

export const CardImageCover = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  &:hover {
    background-color: yellow;
    opacity: 0.1;
  }
`;

export const CardBottom = styled.div`
  font-size: 26px;
`;
