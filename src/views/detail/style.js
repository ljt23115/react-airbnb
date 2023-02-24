import styled from "styled-components";

const DetailWrapper = styled.div`
  position: relative;
  .list {
    padding: 20px;
    .disImg {
      cursor: pointer;
      width: 20%;
      &:first-child {
        width: 30%;
      }
    }

  }
  .more {
    padding: 20px;
  }
  .imgDetail {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
    display: ${props => props.isDis ? 'block' : 'none'};
  }
`

export default DetailWrapper