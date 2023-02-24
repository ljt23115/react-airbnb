import { createSlice } from "@reduxjs/toolkit";

const detailReducer = createSlice({
  name: "detail",
  initialState: {
    itemData: {}
  },
  reducers: {
    changeItemData(state, { payload }) {
      state.itemData = payload
    }
  }
})

export default detailReducer.reducer

export const { changeItemData } = detailReducer.actions