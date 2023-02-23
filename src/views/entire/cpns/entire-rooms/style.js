import styled from "styled-components";

const RoomWrapper = styled.div`
  position: relative;
  padding: 40px 0;
  .title {
    font-size: 22px;
    font-weight: 700;
    color: #222;
    margin: 0 0 15px 0 ;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
  > .cover {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`

export default RoomWrapper