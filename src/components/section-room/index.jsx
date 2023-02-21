import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomWrapper from './style'
import RoomItem from '@/components/room-item'

const SectionRoom = memo((props) => {
  const { roomData } = props

  
  return (
    <RoomWrapper>
      {
        roomData?.slice(0, 8).map(item => (
          <RoomItem key={item.id} itemData={item} roomNum={roomData?.slice(0, 8)?.length}></RoomItem>
        ))
      }
    </RoomWrapper>
  )
})

SectionRoom.propTypes = {
  roomData: PropTypes.array,
}

export default SectionRoom