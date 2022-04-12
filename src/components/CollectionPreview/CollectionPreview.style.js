import styled from "styled-components";

export const CollectionPreviewWrapper = styled.div`
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  font-size: 30px;
  letter-spacing: 1.5px;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

export const CollectionPreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;
