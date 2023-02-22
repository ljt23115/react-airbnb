import styled from "styled-components";

const LongForItemWrapper = styled.div`
  width: 20%;
  flex-shrink: 0;
  position: relative;
  padding: 0 8px;


  .cover {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 0;
    height: 60%;
    background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%);

    .title {
    position: absolute;
    color: white;
    font-weight: 700;
    bottom: 37%;
    left: 50%;
    transform: translateX(-50%);

  }
  .price {
    position: absolute;
    color: white;
    font-size: 12px;
    bottom: 23%;
    left: 50%;
    transform: translateX(-50%);
  }
  }

  img {
    width: 100%;
    border-radius: 3px;
  }

`

export default LongForItemWrapper