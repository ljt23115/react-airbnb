import styled from "styled-components";

const LeftWrapper = styled.div`
  flex: 1;
  color: ${props => props.theme.color.primary};
  .logo {
    width: 102px;
    cursor: pointer;
  }
`

export default LeftWrapper