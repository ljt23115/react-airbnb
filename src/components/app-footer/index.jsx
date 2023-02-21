import React, { memo } from 'react'

import data from '@/assets/data/footer.json'
import FooterWrapper from './style'
import IconLogo from '@/assets/svg/logo'

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="content">
        {
          data?.map(item => (
            <div className='item' key={item.name}>
              <span className='title'>{item.name}</span>
              <div  className="subItem">
                {
                  item.list?.map(subItem => (
                    <span key={subItem}>{subItem}</span>
                  ))
                }
              </div>

            </div>

            
          ))
        }
      </div>
      <div className="gover">
        <div className="logo">
          <IconLogo></IconLogo>
        </div>
        <div className="title">想住的，都在爱彼迎</div>
      </div>
    </FooterWrapper>
  )
})

export default AppFooter