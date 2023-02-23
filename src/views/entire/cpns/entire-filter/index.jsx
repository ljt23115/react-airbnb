import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import FilterWrapper from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const EntireFilter = memo((props) => {
  const [ activeIndexArr, setIndexArr ] = useState([])

  const itemClick = (index) => {
    if(activeIndexArr?.includes(index)) {
      const aimArr = activeIndexArr.filter(item => item !== index)
      setIndexArr([...aimArr])
      return
    }
    setIndexArr([...activeIndexArr, index])
  }

  return (
    <FilterWrapper>
      {
        filterData?.map((item, index) => (
          <div className={classNames(`filterBtn`, { active: activeIndexArr?.includes(index)})} key={item} onClick={() => itemClick(index)}>{item}</div>
        ))
      }
    </FilterWrapper>
  )
})

EntireFilter.propTypes = {}

export default EntireFilter