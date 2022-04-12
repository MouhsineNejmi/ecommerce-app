import styled from "styled-components";

export const CollectionsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 240px 380px;
  grid-gap: 15px;
  margin-bottom: 30px;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 240px);
    overflow: visible;
  }
`;

export const CollectionWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
`;

export const CollectionBackground = styled.div`
  min-width: 40%;
  height: 100%;
  background: url(${(props) => props.image}) no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  filter: saturate(120%);
  &:hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95) 0s;
  }
`;

export const CollectionInfo = styled.div`
  position: absolute;
  bottom: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  color: rgba(0, 0, 0, 0.5);
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 30px 20px;
  z-index: 1;
  cursor: pointer;
  transition: all 0.3s;
  @media screen and (max-width: 520px) {
    width: 60%;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
  & h3,
  & h4 {
    text-transform: uppercase;
    padding-bottom: 15px;
    font-weight: 700;
  }
  & h3 {
    font-size: 18px;
  }
  & h4 {
    font-size: 13px;
  }
`;
