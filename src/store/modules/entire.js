import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEntireRoomList } from "@/server/modules/entire";

export const fetchEntireDataAction = createAsyncThunk('fetchEntireData', async (payload, { getState, dispatch }) => {
  const entireState = getState().entire
  dispatch(changeIsLoadingAction(true))
  // getEntireRoomList(entireState.offset, entireState.size).then(res => {
  //   dispatch(changeRoomListAction(res))
  // })
  const res = await getEntireRoomList(entireState.offset, entireState.size)
  dispatch(changeRoomListAction(res))
  dispatch(changeIsLoadingAction(false))
})


const entireSlice = createSlice({
  name: "entire",
  initialState: {
    page: 0,
    offset: 0,
    size: 20,
    RoomList: [],
    isLoading: false
  },
  reducers: {
    changeRoomListAction(state, { payload }) {
      state.RoomList = payload
    },
    changeIsLoadingAction(state, { payload }) {
      state.isLoading = payload
    },
    changePageAction(state, { payload }) {
      state.page = payload
    },
    changeOffsetAction(state, { payload }) {
      state.offset = payload
    }
  }
})

export default entireSlice.reducer
export const { changeRoomListAction, changeIsLoadingAction, changePageAction, changeOffsetAction } = entireSlice.actions