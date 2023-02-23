import styled from "styled-components";

const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  border-top: 1px solid rgb(211, 211, 211);
  border-bottom: 1px solid rgb(211, 211, 211);
  padding: 10px 0;

  .filterBtn {
    border: 1px solid rgb(211, 211, 211);
    margin-right: 20px;
    padding: 8px 10px;
    border-radius: 3px;
    font-size: 13px;
    cursor: pointer;
  }
  .active {
    color: white;
    background-color: ${props => props.theme.color.secondary};
  }
`

export default FilterWrapper