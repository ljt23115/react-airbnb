import styled from "styled-components";

const ScrollWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;

  .leftBtn {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .rightBtn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
  }
  .btn {
    color: black;
    background-color: white;
    border: 0.5px solid rgb(211, 211, 211);
    border-radius: 50%;
    padding: 5px;
    cursor: pointer;
    z-index: 9999;
  }
  .overflow {
    overflow: hidden;
    .scroll-content {
      transition: transform 250ms ease;
    }
  }

`

export default ScrollWrapper