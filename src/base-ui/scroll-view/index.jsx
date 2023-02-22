import React, { memo, useState, useEffect, useRef } from 'react'
import ScrollWrapper from './style'
import LeftBtn from '@/assets/svg/leftbtn'
import RightBtn from '@/assets/svg/rightbtn'

const ScrollView = memo((props) => {
  const [ isShowRBtn, setRShow ] = useState(true)
  const [ isShowLBtn, setLShow ] = useState(false)
  const [ currentIndex, setIndex ] = useState(0)

  const scrollRef = useRef()

  const totalDistance = useRef()
  const translate = useRef(0)

  useEffect(() => {
    const scrollWidth = scrollRef.current.scrollWidth
    const clientWidth = scrollRef.current.clientWidth
    totalDistance.current = scrollWidth - clientWidth
    setRShow(totalDistance.current > 0 && translate.current < totalDistance.current)
    setLShow(translate.current > 0)
  }, [props.children])

  // useEffect(() => {
  //   const scrollWidth = scrollRef.current.scrollWidth
  //   const clientWidth = scrollRef.current.clientWidth
  //   setRShow(totalDistance > 0)
  // }, [currentIndex])

  function btnClick(type) {

    const newIndex = type === 'right' ? currentIndex + 1 : currentIndex - 1

    const newEl = scrollRef.current.children[0].children[newIndex]
    translate.current = newEl.offsetLeft
    setRShow(translate.current < totalDistance.current)
    setLShow(translate.current > 0)
    scrollRef.current.style.transform = `translate(-${translate.current}px)`
    setIndex(newIndex)
  }

  return (
    <ScrollWrapper>
      {
        isShowLBtn && <div className="btn leftBtn" onClick={e => btnClick('left')}><LeftBtn></LeftBtn></div>
      }
      {
        isShowRBtn && <div className="btn rightBtn" onClick={e => btnClick('right')}><RightBtn></RightBtn></div>
      }
      <div className="overflow">
        <div className="scroll-content" ref={scrollRef}>
          {props.children}
        </div>
      </div>

    </ScrollWrapper>
  )
})

export default ScrollView