import RoomItem from '@/components/room-item'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import RoomWrapper from './style'

const EntireRooms = memo((props) => {
  const { roomList } = props
  
  const { isLoading } = useSelector((state) => ({
    isLoading: state.entire.isLoading
  }), shallowEqual)
  return (
    <RoomWrapper>
      <div className="title">{roomList.totalCount}多处住所</div>
      <div className="list">
        {
          roomList?.list?.map(item => (
            <RoomItem itemData={item} roomNum={roomList?.list?.length / 2} key={item._id}></RoomItem>
          ))
        }
      </div>
      {
        isLoading && <div className="cover"></div>
      }
    </RoomWrapper>
  )
})

EntireRooms.propTypes = {
  roomList: PropTypes.object.isRequired
}

export default EntireRooms