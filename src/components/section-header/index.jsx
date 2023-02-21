import propTypes from 'prop-types'
import React, { memo } from 'react'

import HeaderWrapper from './style'

const SectionHeader = memo((props) => {
  const { title, subtitle } = props

  return (
    <HeaderWrapper>
      <h2 className='head-title'>{title}</h2>
      {
        subtitle && <span className='sub-title'>{subtitle}</span>
      }

    </HeaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string
}

export default SectionHeader