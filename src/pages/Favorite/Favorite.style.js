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
`;
