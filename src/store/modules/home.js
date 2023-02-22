import { getHomeGoodPriceInfo, getHomeHighScoreInfo, getHomeDiscountInfo, getHomeHotRecommendInfo, getHomeLongForInfo, getHomePlusInfo } from '@/server'
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

  getHomeHotRecommendInfo().then(res => {
    dispatch(changeHotRecommendInfo(res))
  })

  getHomeLongForInfo().then(res => {
    dispatch(changeLongForInfo(res))
  })

  getHomePlusInfo().then(res => {
    dispatch(changePlusInfo(res))
  })

})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendInfo: {},
    longForInfo: {},
    plusInfo: {}
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
    },
    changeHotRecommendInfo(state, {payload}) {
      state.hotRecommendInfo = payload
    },
    changeLongForInfo(state, {payload}) {
      state.longForInfo = payload
    },
    changePlusInfo(state, {payload}) {
      state.plusInfo = payload
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
export const { changeGoodPriceInfoAction, changeHighScoreInfoAction, changeDiscountInfoAction, changeHotRecommendInfo, changeLongForInfo, changePlusInfo } = homeSlice.actions