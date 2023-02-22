import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;

  .info {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 700;
    color: ${props => props.msgColor};
    .text {
      margin-right: 6px;

    }
    &:hover {
      text-decoration: underline;
    }
  }
`

export default FooterWrapper