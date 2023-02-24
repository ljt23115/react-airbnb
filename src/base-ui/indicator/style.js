import styled from "styled-components";

const IndicatorWrapper = styled.div`
    overflow: hidden;
  .i-content {
    display: flex;
    align-items: center;
    transition: transform 250ms ease;
    > * {
      flex-shrink: 0;
    }
  }
`

export default IndicatorWrapper