import styled from "styled-components";

const RoomWrapper = styled.div`
  width: ${props => props.roomWidth};
  padding-right: 16px;
  padding-bottom: 16px;
  flex-shrink: 0;
  .cover {
    position: relative;
    padding: 66.6% 0 0;
    height: 0;
    overflow: hidden;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  .desc {
    .tip {
      color: ${props => props.verifyColor};
      padding: 5px 0;
      font-size: 12px;
    }
    .detail {
      font-weight: bold;
    }
    .price {
      padding: 5px 0;
      font-size: 13px;
    }
    .score {
      font-size: 12px;
      font-weight: 500;
      display: flex;
      align-items: center;

      .MuiRating-root {
        margin-right: 5px;
      }
      .MuiRating-icon {
        margin-right: -3px;
      }
    }
  }
`

export default RoomWrapper