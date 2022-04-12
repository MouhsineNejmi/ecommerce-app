import styled from "styled-components";

export const CollectionProductsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 370px;
  gap: 15px;
  margin-top: 25px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 475px) {
    grid-template-columns: 1fr;
  }
`;
