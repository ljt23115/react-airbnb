import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;

  .ant-pagination-item:hover {
    border-radius: 50%;
  }
  .ant-pagination-item-active {
    border: none;
    background-color: black;
    border-radius: 50%;
    padding: 0;
    a {
      color: white;
      &:hover {
        color: white;
      }
    }
  }
  .desc {
      margin-top: 20px;
      font-size: 13px;
  }
`

export default PageWrapper