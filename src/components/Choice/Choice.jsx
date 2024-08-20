import styled from "styled-components";

const StyledChoice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-top: 20px;

  h2 {
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    color: #0ecbec;
    font-size: 40px;
  }
`;

const Choice = ({ imgUrl, imgLabel }) => (
  <StyledChoice>
    {/* <img src={imgUrl} alt={imgLabel} /> */}
    <h2>{imgLabel}</h2>
  </StyledChoice>
);

export default Choice;
