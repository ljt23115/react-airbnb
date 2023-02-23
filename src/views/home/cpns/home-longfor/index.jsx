import PropTypes from 'prop-types'
import React, { memo } from 'react'
import LongForWrapper from './style'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view'
import LongForItem from '@/components/longfor-item'

const HomeLongFor = memo((props) => {
  const { sectionData } = props

  return (
    <LongForWrapper>
      <SectionHeader title={sectionData.title} subtitle={sectionData.subtitle}></SectionHeader>
      <ScrollView>
        <div className="long-for">
          {
            sectionData.list?.map((item) => <LongForItem itemData={item} key={item.city}></LongForItem>)
          }
        </div>
      </ScrollView>

    </LongForWrapper>
  )
})

HomeLongFor.propTypes = {
  sectionData: PropTypes.object
}

export default HomeLongFor