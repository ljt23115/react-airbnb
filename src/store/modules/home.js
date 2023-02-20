import { getHomeGoodPriceInfo } from '@/server'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk('fetchHomeData', async () => {
  const goodPriceInfo = await getHomeGoodPriceInfo()

  return goodPriceInfo
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: []
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload
      console.log(state, payload)
    }
  }
})

export default homeSlice.reducer
export const { changeGoodPriceInfoAction } = homeSlice.actions