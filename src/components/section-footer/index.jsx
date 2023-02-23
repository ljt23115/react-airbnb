import PropTypes from 'prop-types'
import React, { memo } from 'react'
import FooterWrapper from './style'
import ShowMore from '@/assets/svg/showMore'
import { useNavigate } from 'react-router-dom'


const SectionFooter = memo((props) => {
  const { name } = props

  const navigate = useNavigate()
  const itemClick = () => {
    navigate("/entire")
    window.scrollTo(0, 0)
  }

  return (
    <FooterWrapper msgColor={ name ? '#00848a' : '#000000' }>
      <div className="info" onClick={itemClick}>
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