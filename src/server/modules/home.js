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

export function getHomeHotRecommendInfo() {
  return axRequest.get({
    url: '/home/hotrecommenddest'
  })
}

export function getHomeLongForInfo() {
  return axRequest.get({
    url: '/home/longfor'
  })
}

export function getHomePlusInfo() {
  return axRequest.get({
    url: '/home/plus'
  })
}