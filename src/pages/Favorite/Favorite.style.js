import styled from "styled-components";

export const FavoriteWrapper = styled.section`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 40px;
  letter-spacing: 3px;
  margin-bottom: 30px;
`;

export const FavoriteMsg = styled.div`
  padding-top: 20px;

  & p {
    font-size: 21px;
    font-weight: 300;
    letter-spacing: 1.1px;
    color: ${({ theme }) => theme.gray};
  }
`;

export const FavoriteContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 350px;
  gap: 15px;

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
