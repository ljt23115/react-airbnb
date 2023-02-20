import React, { memo } from 'react'

import CenterWrapper from './style'
import Search from '@/assets/svg/search'

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <input type="text" placeholder='搜索房源和体验'/>
      <div className="icon">
        <Search></Search>
      </div>
      
    </CenterWrapper>
  )
})

export default HeaderCenter