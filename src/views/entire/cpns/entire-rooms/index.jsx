import RoomItem from '@/components/room-item'
import { changeItemData } from '@/store/modules/detail'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import RoomWrapper from './style'

const EntireRooms = memo((props) => {
  const { roomList } = props
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isLoading } = useSelector((state) => ({
    isLoading: state.entire.isLoading
  }), shallowEqual)

  function itemClick(data) {
    dispatch(changeItemData(data))
    navigate("/detail")
  }
  return (
    <RoomWrapper>
      <div className="title">{roomList.totalCount}多处住所</div>
      <div className="list">
        {
          roomList?.list?.map(item => (
            <RoomItem itemData={item} roomNum={roomList?.list?.length / 2} key={item._id} itemClick={itemClick}></RoomItem>
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