import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import DetailWrapper from './style'
// import Indicator from '@/base-ui/indicator'
import { Button } from 'antd';
import ImgDetail from '../../base-ui/img-detail'

const Detail = memo((props) => {
  const { itemData } = useSelector((state) => ({
    itemData: state.detail.itemData
  }), shallowEqual)

  const [ isDis, setIsDis ] = useState(false)
  const [ currentIndex, setIndex] = useState(0)

  const btnClick = (index) => {
    setIsDis(true)
    if(index >= 0) {
      setIndex(index)
    }
  }
  const closeDetail = () => {
    setIsDis(false)
  }

  return (
    <DetailWrapper isDis={isDis}>
      <div className="list" >
        {
          itemData?.picture_urls?.slice(0, 5)?.map((item, index) => (
            <img className='disImg' onClick={() => btnClick(index)} key={item} src={item} alt="" />
          ))
        }
      </div>
      <div className="more">
        <Button onClick={() => btnClick()}>查看全部</Button>
      </div>
      <div className="imgDetail">
        {
          isDis && <ImgDetail itemData={itemData} currentIndex={currentIndex} closeDetail={closeDetail}></ImgDetail>
        }
      </div>
    </DetailWrapper>
  )
})


export default Detail