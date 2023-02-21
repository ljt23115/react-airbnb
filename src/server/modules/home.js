import axRequest from "..";

export function getHomeGoodPriceInfo() {
  return axRequest.get({
    url: '/home/goodprice'
  })
}

export function getHomeHighScoreInfo() {
  return axRequest.get({
    url: '/home/highscore'
  })
}

export function getHomeDiscountInfo() {
  return axRequest.get({
    url: '/home/discount'
  })
}