import styled from "styled-components";

export const ShopPageWrapper = styled.section`
  margin: 30px 0;
`;

export const ShopPageCollection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 350px;
  gap: 15px;
  margin-bottom: 50px;

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
