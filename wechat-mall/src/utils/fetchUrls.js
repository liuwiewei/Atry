const state = 'dev'

let urls
if (state === 'dev') {
  urls = {
    indexSwiper: 'http://huanqiuxiaozhen.com/wemall/slider/list',
    indexTheme: 'http://huanqiuxiaozhen.com/wemall/venues/venuesList',
    indexDiscovery: 'http://huanqiuxiaozhen.com/wemall/goods/choiceList',
    indexBrand: 'http://www.huanqiuxiaozhen.com/wemall/venues/getBrandAndType',
    indexList: 'http://www.huanqiuxiaozhen.com/wemall/goods/inqGoodsByTypeBrand',
    indexDetails: 'http://huanqiuxiaozhen.com/wemall/goods/inqgoods'
  }
} else {
  urls = {}
}
export default urls
