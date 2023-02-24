import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'

import RoomWrapper from './style'
import Rating from '@mui/material/Rating';
import { Carousel } from 'antd';
import LeftBtn from '@/assets/svg/leftbtn';
import RightBtn from '@/assets/svg/rightbtn';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';

const RoomItem = memo((props) => {
  const { itemData, roomNum, itemClick } = props
  const [ currentIndex, setIndex ] = useState(0)

  const swipperRef = useRef()

  const controlBtnClick = (isLeft = true) => {
    if(isLeft) {
      swipperRef.current?.prev()
    } else {
      swipperRef.current?.next()
    }

    if (!isLeft && currentIndex === itemData.picture_urls?.length - 1) {
      setIndex(0)
      return
    } else if( isLeft && currentIndex === 0 ) {
      setIndex(itemData.picture_urls?.length - 1)
      return
    }
    !isLeft ? setIndex(currentIndex + 1) : setIndex(currentIndex - 1)
  }

  return (
    <RoomWrapper verifyColor={itemData?.verify_info?.text_color || "#39576a"} roomWidth={((100 / roomNum * 2) || 25 ) + "%"} onClick={() => itemClick(itemData)}> 

      {
        itemData.picture_urls ? 
        <div className="swiper">
          <div className="control">
            <div className="cBtn lBtn" onClick={() => controlBtnClick(true)}>
              <LeftBtn width={30} height={30}></LeftBtn>
            </div>
            <div className="cBtn rBtn" onClick={() => controlBtnClick(false)}>
              <RightBtn width={30} height={30}></RightBtn>
            </div>
          </div>
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
        </div>
        :(
          <div className="cover">
            <img src={itemData.picture_url} alt="" />
          </div>
        )
      }
      <div className="desc">
        <div className="tip">
          {
            itemData.verify_info.messages.join("·")
          }
        </div>
        <span className='detail'>{ itemData && itemData.name }</span>
        <div className="price">{itemData.price_format}/晚</div>
        <div className="score">
          <Rating name="read-only" 
                  value={itemData.star_rating ?? 5} 
                  readOnly 
                  precision={0.5}
                  sx={{ 
                    fontSize: "12px", 
                    color: "#00848a"
                  }}/>
          <span>
            { itemData.reviews_count }{ itemData.bottom_info?.content && "·" + itemData.bottom_info?.content }
          </span>
        </div>
      </div>
    </RoomWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  roomNum: PropTypes.number,
  itemClick: PropTypes.func
}

export default RoomItem