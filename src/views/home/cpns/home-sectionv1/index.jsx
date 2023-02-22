import PropTypes from 'prop-types'
import React, { memo } from 'react'
import HomeSectionWrapper from './style'
import SectionRoom from '@/components/section-room'
import SectionHeader from '@/components/section-header'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {
  const { sectionData } = props

  return (
    <HomeSectionWrapper>
      <SectionHeader title={sectionData.title} subtitle={sectionData.subtitle ?? ''}></SectionHeader>
      <SectionRoom roomData={sectionData.list}></SectionRoom>
      <SectionFooter></SectionFooter>
    </HomeSectionWrapper>
  )
})

HomeSectionV1.propTypes = {
  sectionData: PropTypes.object.isRequired
}

export default HomeSectionV1