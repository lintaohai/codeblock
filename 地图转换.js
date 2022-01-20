

wxdd7c5d703d36a45b
gh_7fbb7636fa38

百度 腾讯地图 经纬度互转
const TxMapTransBMap = (lng, lat) => {
  let x_pi = Math.PI * 3000.0 / 180.0
  let x = lng 
  let y = lat
  let z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi)
  let theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi)
  let lngs = z * Math.cos(theta) + 0.0065
  let lats = z * Math.sin(theta) + 0.006
  return {
    lng: lngs,
    lat: lats
  }
}
const BMapTransTxMap = (lng, lat) => {
  let x_pi = Math.PI * 3000.0 / 180.0
  let x = lng 
  let y = lat
  let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi)
  let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi)
  let lngs = z * Math.cos(theta) - 0.0065
  let lats = z * Math.sin(theta) - 0.006
  return {
    lng: lngs,
    lat: lats
  }
}