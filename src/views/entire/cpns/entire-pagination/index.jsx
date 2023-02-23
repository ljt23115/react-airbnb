import React, { memo } from 'react'
import PageWrapper from './style'
import { Pagination } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { changePageAction, changeOffsetAction, fetchEntireDataAction } from '@/store/modules/entire';

const EntirePage = memo((props) => {
  const { offset, page, RoomList, size } = useSelector((state) => ({
    offset: state.entire.offset,
    page: state.entire.page,
    RoomList: state.entire.RoomList,
    size: state.entire.size
  }), shallowEqual)
  const dispatch = useDispatch()

  const showPageDetail = (currentPage, PageSize) => {
    if(page + 1 === currentPage) {
      return
    }
    const newOffset = offset + ( currentPage - page - 1 ) * PageSize
    dispatch(changePageAction(currentPage - 1))
    window.scrollTo(0, 0)
    dispatch(changeOffsetAction(newOffset))
    dispatch(fetchEntireDataAction(newOffset, PageSize))

  }

  return (
    <PageWrapper>
      <Pagination
        showSizeChanger={false}
        onChange={showPageDetail}
        defaultCurrent={1}
        current={page + 1}
        total={RoomList.totalCount}
        pageSize={20}
      />
      <div className="desc">{`第${offset} ~ ${offset + size}个房源, 共超过${RoomList.totalCount}个`}</div>
    </PageWrapper>

  )
})

export default EntirePage