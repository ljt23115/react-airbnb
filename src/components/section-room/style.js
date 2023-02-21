import styled from "styled-components";

const RoomWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(${props => props.theme.contentWidth} + 16px);
`

export default RoomWrapper