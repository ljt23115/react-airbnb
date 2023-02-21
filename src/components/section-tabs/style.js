import styled from "styled-components";

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 10px 0;

  .item {
    border: 1px solid rgb(211, 211, 211);
    padding: 12px;
    margin-left: 20px;
    cursor: pointer;
    &.active {
      color: white;
      background-color: ${props => props.theme.color.secondary};
    }
  }

`

export default TabsWrapper