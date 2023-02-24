import styled from "styled-components";

const RoomWrapper = styled.div`
  width: ${props => props.roomWidth};
  padding-right: 16px;
  padding-bottom: 16px;
  flex-shrink: 0;

  .swiper {
    position: relative;
    &:hover .control {
      display: block;
    }
    .control {
      display: none;
      color: white;
      .cBtn {
        height: 100%;
        position: absolute;
        z-index: 100;
        display: flex;
        align-items: center;
        cursor: pointer;
      }
      .lBtn {
        left: 0;
        background-image: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
      }
      .rBtn {
        right: 0;
        background-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
      }
    }
    .indicator {
      position: absolute;
      width: 50px;
      bottom: 8%;
      left: 50%;
      transform: translateX(-50%);
      .sign {
        background-color: rgba(255, 255, 255, 0.5);
        width: 5px;
        height: 5px;
        margin-right: 5px;
        border-radius: 50%;
      }
      .signActive {
        background-color: white;
        width: 6px;
        height: 6px;
      }
    }
  }

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
      object-fit: cover;
      cursor: pointer;
    }
  }
  .desc {
    cursor: pointer;
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