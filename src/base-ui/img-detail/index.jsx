import PropTypes from 'prop-types'
import React, { memo } from 'react'
import ImgDetailWrapper from './style'

const ImgDetail = memo((props) => {
  const { closeDetail } = props

  return (
    <ImgDetailWrapper>
      <div className="header" onClick={closeDetail}>
        X
      </div>
      {/* <div className="imgD-content">
        <Carousel dots={false} ref={swipperRef}>
          {
            itemData?.picture_urls?.map(item => {
              return ( <div className='cover' key={item}><img src={item} alt="" /></div> )
            })
          }
        </Carousel>
        <div className="indicator">
          <Indicator currentIndex={currentIndex}>
            {
              itemData.picture_urls?.map((item, index) => (
                <div className={classNames("sign", { signActive: currentIndex === index })} key={item}></div>
              ))
            }
          </Indicator>
        </div>
      </div> */}
    </ImgDetailWrapper>
  )
})

ImgDetail.propTypes = {
  closeDetail: PropTypes.func.isRequired
}

export default ImgDetail