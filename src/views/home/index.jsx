import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import HomeWrapper from './style'
import Banner from './cpns/banners'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './cpns/home-sectionv1'
import HomeSectionV2 from './cpns/home-sectionv2'
import { isEmptyObj } from '@/utils/isEmptyObj'
import HomeLongFor from './cpns/home-longfor'
import HomePlus from './cpns/home-plus'

const home = memo((props) => {
  // 从store中获取数据
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longForInfo, plusInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.hotRecommendInfo,
    longForInfo: state.home.longForInfo,
    plusInfo: state.home.plusInfo
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


        { !isEmptyObj(discountInfo) && <HomeSectionV2 sectionData={discountInfo}></HomeSectionV2> }

        { !isEmptyObj(recommendInfo) && <HomeSectionV2 sectionData={recommendInfo}></HomeSectionV2> }
                
        { !isEmptyObj(longForInfo) && <HomeLongFor sectionData={longForInfo}></HomeLongFor> }

        { !isEmptyObj(goodPriceInfo) && <HomeSectionV1 sectionData={goodPriceInfo}></HomeSectionV1> }

        { !isEmptyObj(highScoreInfo) && <HomeSectionV1 sectionData={highScoreInfo}></HomeSectionV1> }

        { !isEmptyObj(plusInfo) && <HomePlus sectionData={plusInfo}></HomePlus> }
        
      </div>
    </HomeWrapper>
  )
})


export default (home)