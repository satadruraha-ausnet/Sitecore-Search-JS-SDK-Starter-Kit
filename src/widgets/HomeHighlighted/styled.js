import styled from 'styled-components';

export const ArticleCard = styled.div`
  
  background-color: #ffffff;
  border-radius: 30px;
  position: relative;
  z-index: 1;
  //background: inherit;
  -webkit-backdrop-filter: blur(24px);
  //backdrop-filter: blur(24px);
  padding: 30px 20px;
  width: 25%;
  min-height: 300px;
  align-items: center;
  display: flex;
  cursor: pointer;

  &:hover {
    box-shadow: 0 20px 30px rgba(49,52,65,.12);
  }
`;

export const ArticleCardContent = styled.div`
  flex-grow: 1;
  justify-content: space-between;
  display: block;
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;

  h3 {
    font-size:1.3rem;
    width: 100%;
    height: 30px;
    color: #1d294e;
  }
  span.text {
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: 43px;
    overflow: hidden;
    font-size: 15px;
    display: block;
    color: #5e667d;
  }
`;

export const ArticleCardImage = styled.div`
  margin-bottom: 15px;
  width: 100%;

  svg {
    width: auto;
    height: 100%;
    border-radius: 8px;
  }
`;

export const HighlightedHeading = styled.h2`
  margin-bottom: 45px;
  text-align: center;
  font-size: 3rem;
  width: 100%;
  color: #000;
`;
