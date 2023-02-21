import PropTypes from 'prop-types'
import React, { memo } from 'react'

import RoomWrapper from './style'
import Rating from '@mui/material/Rating';

const RoomItem = memo((props) => {
  const { itemData, roomNum } = props

  return (
    <RoomWrapper verifyColor={itemData?.verify_info?.text_color || "#39576a"} roomWidth={((100 / roomNum * 2) || 25 ) + "%"}>
      <div className="cover">
        <img src={itemData.picture_url} alt="" />
      </div>
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
  roomNum: PropTypes.number
}

export default RoomItem