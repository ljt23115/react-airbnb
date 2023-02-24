import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import IndicatorWrapper from './style'

const Indicator = memo((props) => {
  const { currentIndex } = props
  const contentRef = useRef()

  useEffect(() => {
    const currentEl = contentRef.current.children[currentIndex]
    const newElOffsetLeft = currentEl.offsetLeft
    const newElWidth = currentEl.clientWidth

    const contentWidth = contentRef.current.clientWidth
    let distance = newElOffsetLeft + newElWidth * 0.5 - contentWidth * 0.5
    if(distance < 0) {
      distance = 0
    }
    if(distance > contentRef.current.scrollWidth - contentWidth) {
      distance = contentRef.current.scrollWidth - contentWidth
    }

    contentRef.current.style.transform = `translate(${-distance}px)`

  }, [currentIndex])

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  currentIndex: PropTypes.number.isRequired
}

export default Indicator