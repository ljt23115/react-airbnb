import PropTypes from 'prop-types'
import React, { memo } from 'react'
import LongForItemWrapper from './style'

const LongForItem = memo((props) => {
  const { itemData } = props

  return (
    <LongForItemWrapper>
      <div className="inner">
        <div className="cover">
          <div className="title">{itemData.city}</div>
          <div className="price">{`均价${itemData.price}`}</div>
        </div>
        <img src={itemData.picture_url} alt="" />

      </div>
    </LongForItemWrapper>
  )
})

LongForItem.propTypes = {
  itemData: PropTypes.object
}

export default LongForItem