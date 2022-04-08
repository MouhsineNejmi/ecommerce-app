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
`;

export const Title = styled.h2`
  font-size: 30px;
  letter-spacing: 1.5px;
  margin-bottom: 20px;
  text-transform: uppercase;
`;
