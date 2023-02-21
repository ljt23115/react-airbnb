import React, { memo, useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import HomeWrapper from './style'
import Banner from './cpns/banners'
import SectionHeader from '@/components/section-header'
import { fetchHomeDataAction } from '@/store/modules/home'
import SectionRoom from '@/components/section-room'
import SectionTabs from '@/components/section-tabs'


const home = memo((props) => {
  // 从store中获取数据
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo
  }), shallowEqual)

  // 发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  // 定义响应式数据
  const [ currentTab, setTab ] = useState("佛山")

  // 转换数据
  const tabNames = discountInfo?.dest_address?.map(item => item.name)

  // tabs组件的 emit函数
  const emitCurrentTab = useCallback(function(name) {
    setTab(name)
  }, [])
  


  return (
    <HomeWrapper>
      <Banner></Banner>
      <div className="content">

        <div className="discount">
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle}></SectionHeader>
          <SectionTabs tabNames={tabNames ?? []} emitCurrentTab={emitCurrentTab}></SectionTabs>
          <SectionRoom roomData={discountInfo.dest_list?.[currentTab]} ></SectionRoom>
        </div>

        <div className="goodPrice">
          <SectionHeader title={goodPriceInfo.title}></SectionHeader>
          <SectionRoom roomData={goodPriceInfo.list}></SectionRoom>
        </div>

        <div className="highScore">
          <SectionHeader title={highScoreInfo.title} subtitle={highScoreInfo.subtitle}></SectionHeader>
          <SectionRoom roomData={highScoreInfo.list}></SectionRoom>
        </div>
        
      </div>
    </HomeWrapper>
  )
})


export default (home)