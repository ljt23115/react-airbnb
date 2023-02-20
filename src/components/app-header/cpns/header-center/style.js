import styled from "styled-components";

const CenterWrapper = styled.div`
  width: 280px;
  height: 40px;
  border: 1px solid rgb(211, 211, 211);
  border-radius: 50px;
  padding: 10px 6px;
  padding-left: 25px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${props => props.theme.mixins.boxShadow}

  input {
    font-size: 12px;
    color: ${props => props.theme.font.dark};
    font-weight: bold;
  }
  .icon {
    background-color: ${props => props.theme.color.primary};
    color: white;
    padding: 7px;
    border-radius: 50%;
  }

`

export default CenterWrapper