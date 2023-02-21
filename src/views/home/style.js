import styled from "styled-components";

const HomeWrapper = styled.div`

  .content {
    width: ${props => props.theme.contentWidth};
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`

export default HomeWrapper