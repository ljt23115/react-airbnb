import PropTypes from 'prop-types'
import React, { memo } from 'react'
import FooterWrapper from './style'
import ShowMore from '@/assets/svg/showMore'


const SectionFooter = memo((props) => {
  const { name } = props

  return (
    <FooterWrapper msgColor={ name ? '#00848a' : '#000000' }>
      <div className="info">
        <span className="text">{ name ?? '显示全部' }</span>
        <ShowMore></ShowMore>
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter