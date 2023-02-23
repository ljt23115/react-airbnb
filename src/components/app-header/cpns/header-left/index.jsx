import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import LeftWrapper from './style'
import IconLogo from '@/assets/svg/logo'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()

  const logoClick = () => {
    navigate("/home")
  }

  return (
    <LeftWrapper>
      <div className="logo" onClick={logoClick}>
        <IconLogo></IconLogo>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft