import styled from "styled-components";

const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;

  .btn {
    font-size: 14px;
    color: ${props => props.theme.font.dark};
    font-weight: bold;
    padding: 12px;
    cursor: pointer;
    &:hover {
      background-color: rgb(247, 247, 247);
      border-radius: 50%;
    }
  }
  .admin {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 75px;
    height: 42px;
    padding: 5px 5px 5px 12px;
    border: 1px solid rgb(211, 211, 211);
    border-radius: 21px;
    cursor: pointer;
    margin-left: 10px;
    .avatar {
      flex: 1;
    }
    .panel {
      position: absolute;
      top: 54px;
      right: 0;
      width: 240px;
      display: flex;
      flex-direction: column;
      border: 1px solid rgb(211, 211, 211);
      border-radius: 15px;
      background-color: white;
      z-index: 105;

      .top, .bottom {
        display: flex;
        flex-direction: column;

        padding: 5px 0;
        span {
          padding: 10px 15px;
          height: 40px;

          &:hover {
            background-color: rgb(247, 247, 247);
          }
        }
      }
      .top {
        border-bottom: 1px solid rgb(211, 211, 211);

        span:first-child {
          font-weight: bold;
        }
      }
    }

    ${props => props.theme.mixins.boxShadow}
  }

`

export default RightWrapper