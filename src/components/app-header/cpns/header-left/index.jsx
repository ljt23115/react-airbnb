import React, { memo } from 'react'

import LeftWrapper from './style'
import IconLogo from '@/assets/svg/logo'

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <div className="logo">
        <IconLogo></IconLogo>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft