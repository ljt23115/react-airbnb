import { getHomeGoodPriceInfo, getHomeHighScoreInfo, getHomeDiscountInfo } from '@/server'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk('fetchHomeData', (payload, { dispatch }) => {
  getHomeGoodPriceInfo().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })

  getHomeHighScoreInfo().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })

  getHomeDiscountInfo().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })

})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: [],
    highScoreInfo: [],
    discountInfo: []
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    }
  },
  // extraReducers: {
  //   [fetchHomeDataAction.fulfilled](state, { payload }) {
  //     state.goodPriceInfo = payload
  //     console.log(state, payload)
  //   }
  // }
})

export default homeSlice.reducer
export const { changeGoodPriceInfoAction, changeHighScoreInfoAction, changeDiscountInfoAction } = homeSlice.actions