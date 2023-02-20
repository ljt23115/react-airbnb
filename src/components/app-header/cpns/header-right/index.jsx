import React, { memo, useState, useEffect } from 'react'

import RightWrapper from './style'
import Glob from '@/assets/svg/glob'
import Menu from '@/assets/svg/menu'
import Avatar from '@/assets/svg/avantar'

const HeaderRight = memo(() => {
  const [isDis, setIsDis ] = useState(false)
  useEffect(() => {
    const fun = () => {
      setIsDis(false)
    }

    window.addEventListener('click', fun, true)

    return () => {
      window.removeEventListener('click', fun)
    }
  }, [])
  function clickAdmin() {
    setIsDis(!isDis)
  }

  return (
    <RightWrapper>
      <div className="logo btn">
        登录
      </div>
      <div className="register btn">注册</div>
      <div className="icon btn">
        <Glob></Glob>
      </div>
      <div className="admin" onClick={clickAdmin}>
        <Menu></Menu>
        <Avatar className="avatar"></Avatar>
        {
          isDis && (
            <div className="panel">
              <div className="top">
                <span>登录</span>
                <span>注册</span>
              </div>
              <div className="bottom">
                <span>出租房源</span>
                <span>开展体验</span>
                <span>帮助</span>
              </div>
            </div>
          )
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight