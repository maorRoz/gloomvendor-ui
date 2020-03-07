import styled from 'styled-components';

export const Card = styled.div`
  justify-self: stretch;
  border-bottom: 1px solid black;
  border-left: 0.5px solid black;
  border-right: 0.5px solid black;
  padding: 1vmin;
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CardImageLayout = styled.div<{ outOfStock: boolean }>`
  cursor: ${({ outOfStock }) => (outOfStock ? 'not-allowed' : 'pointer')};
  position: relative;
  width: fit-content;
`;

export const CardImage = styled.img<{ outOfStock: boolean }>`
  border-radius: 15px;
  max-width: 100%;
  filter: ${({ outOfStock }) => outOfStock && `grayscale(100%)`};
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

export const CardBottom = styled.div<{ outOfStock: boolean }>`
  text-align: center;
  font-size: 3em;
  color: ${({ outOfStock }) => outOfStock && `grey`};
`;
