import React, { memo } from 'react'
import HeaderLeft from './cpns/header-left'
import HeaderCenter from './cpns/header-center'
import HeaderRight from './cpns/header-right'
import HeaderWrapper from './style'

const AppHeader = memo(() => {
  return (

    <HeaderWrapper>
      <HeaderLeft></HeaderLeft>
      <HeaderCenter></HeaderCenter>
      <HeaderRight></HeaderRight>
    </HeaderWrapper>
  )
})

export default AppHeader