import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import EntireWrapper from './style'
import EntireFilter from './cpns/entire-filter'
import EntireRooms from './cpns/entire-rooms'
import EntirePage from './cpns/entire-pagination'
import { fetchEntireDataAction } from '@/store/modules/entire'
import { isEmptyObj } from '@/utils/isEmptyObj'

const Entire = memo((props) => {
  // 发送网络请求
  const { RoomList } = useSelector((state) => ({
    RoomList: state.entire.RoomList,
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireDataAction({offset: 20, size: 20}))
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter></EntireFilter>
      {
        !isEmptyObj(RoomList) && <EntireRooms roomList={RoomList}></EntireRooms>
      }
      
      <EntirePage></EntirePage>
      
    </EntireWrapper>
  )
})


export default Entire