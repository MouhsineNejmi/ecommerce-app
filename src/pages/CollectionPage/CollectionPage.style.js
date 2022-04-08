import styled from "styled-components";

export const CollectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 38px;
  color: ${({ theme }) => theme.title};
  text-align: center;
  margin: 10px 0;
  letter-spacing: 1.5px;
`;
