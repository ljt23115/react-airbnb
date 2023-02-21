import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import TabsWrapper from './style'
import classNames from 'classnames'

const SectionTabs = memo((props) => {
  const { tabNames, emitCurrentTab } = props
  const [ currentIndex, setIndex ] = useState(0)
  function itemClick(item, index) {
    setIndex(index)
    emitCurrentTab(item)
  }

  return (
    <TabsWrapper>
      {
        tabNames?.map((item, index) => (
          <div  className={classNames("item", { active: currentIndex === index })}   
                key={item} 
                onClick={e => itemClick(item, index)}>
            {item}
          </div>
        ))
      }
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
  emitCurrentTab: PropTypes.func
}

export default SectionTabs