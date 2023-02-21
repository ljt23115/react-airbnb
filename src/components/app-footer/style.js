import styled from "styled-components";

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid rgb(211, 211, 211);
  margin-top: 100px;
  .content {
    width: ${props => props.theme.contentWidth};
    margin-top: 40px;
    display: flex;
    justify-content: flex-start;
    .item {
      display: flex;
      flex-direction: column;
      margin-right: 140px;
      padding-bottom: 40px;
      
      .title {
        font-weight: bold;
        padding-bottom: 20px;
      }
      .subItem {
        display: flex;
        flex-direction: column;
        color: rgb(171, 171, 171);
        
        span {
          margin-bottom: 5px;
          cursor: pointer;
        }
      }
    }
  }
  .gover {
    width: ${props => props.theme.contentWidth};
    padding-top: 20px;
    padding-bottom: 40px;
    border-top: 1px solid rgb(211, 211, 211);

    display: flex;
    flex-direction: row;
    align-items: center;

    .logo {
      color: ${props => props.theme.color.primary};
    }

    .title {
      font-weight: bold;
      font-size: 18px;
      margin-left: 20px;
    }
  }

`

export default FooterWrapper