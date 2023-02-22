import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'
import HomeSectionWrapper from './style'
import SectionHeader from '@/components/section-header'
import SectionRoom from '@/components/section-room'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'
import ScrollView from '@/base-ui/scroll-view'

const HomeSectionV2 = memo((props) => {
  const { sectionData } = props

  // 定义响应式数据
  const [ currentTab, setTab ] = useState(sectionData.dest_address[0].name)

  // 转换数据
  const tabNames = sectionData?.dest_address?.map(item => item.name)

  // tabs组件的 emit函数
  const emitCurrentTab = useCallback(function(name) {
    setTab(name)
  }, [])

  return (
    <HomeSectionWrapper>
        <SectionHeader title={sectionData.title} subtitle={sectionData.subtitle ?? ''}></SectionHeader>
        <ScrollView>
          <SectionTabs tabNames={tabNames ?? []} emitCurrentTab={emitCurrentTab}></SectionTabs>
        </ScrollView>

        <SectionRoom roomData={sectionData.dest_list?.[currentTab]} ></SectionRoom>
        <SectionFooter name={`显示更多${currentTab}房源`}></SectionFooter>
    </HomeSectionWrapper>
  )
})

HomeSectionV2.propTypes = {
  sectionData: PropTypes.object.isRequired
}

export default HomeSectionV2