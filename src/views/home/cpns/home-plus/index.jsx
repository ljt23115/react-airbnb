import PropTypes from 'prop-types'
import React, { memo } from 'react'
import PlusWrapper from './style'
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'
import ScrollView from '@/base-ui/scroll-view'

const HomePlus = memo((props) => {
  const { sectionData } = props

  return (
    <PlusWrapper>
      <SectionHeader title={sectionData.title} subtitle={sectionData.subtitle}></SectionHeader>
      <ScrollView>
        <div className="plus-content">
          {
            sectionData.list?.map(item => (
              <RoomItem itemData={item} roomNum={sectionData.list?.length} key={item.id}></RoomItem>
            ))
          }
        </div>
      </ScrollView>

    </PlusWrapper>
  )
})

HomePlus.propTypes = {
  sectionData: PropTypes.object.isRequired
}

export default HomePlus