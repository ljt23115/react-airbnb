import styled from "styled-components";

const TabsWrapper = styled.div`
  display: flex;
  margin: 10px 0;

  .item {
    flex-basis: 120px;
    flex-shrink: 0;
    border: 0.5px solid rgb(211, 211, 211);
    border-radius: 3px;
    padding: 12px 0;
    margin-right: 20px;
    text-align: center;
    cursor: pointer;
    &.active {
      color: white;
      background-color: ${props => props.theme.color.secondary};
    }
  }

`

export default TabsWrapper