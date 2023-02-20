import axRequest from "..";

export function getHomeGoodPriceInfo() {
  return axRequest.get({
    url: '/home/goodprice'
  })
}