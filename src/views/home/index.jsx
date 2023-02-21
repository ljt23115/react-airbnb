import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import HomeWrapper from './style'
import Banner from './cpns/banners'
import SectionHeader from '@/components/section-header'
import { fetchHomeDataAction } from '@/store/modules/home'
import SectionRoom from '@/components/section-room'


const home = memo((props) => {
  // 从store中获取数据
  const { goodPriceInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
  }), shallowEqual)

  // 发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <Banner></Banner>
      <div className="content">
        <div className="goodPrice">
          <SectionHeader title={goodPriceInfo.title}></SectionHeader>
          <SectionRoom roomData={goodPriceInfo.list}></SectionRoom>
        </div>
      </div>
    </HomeWrapper>
  )
})


export default (home)