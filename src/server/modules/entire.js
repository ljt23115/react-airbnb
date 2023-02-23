import axRequest from "..";

export function getEntireRoomList(offset = 0, size = 20) {
  return axRequest.get({
    url: '/entire/list',
    params: {
      offset,
      size
    }
  })
}