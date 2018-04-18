const state = 'dev'

let urls
if (state === 'dev') {
  urls = {
    indexSwiper: 'http://huanqiuxiaozhen.com/wemall/slider/list',
    indexTheme: 'http://huanqiuxiaozhen.com/wemall/venues/venuesList',
    indexDiscovery: 'http://huanqiuxiaozhen.com/wemall/goods/choiceList'
  }
} else {
  urls = {}
}
export default urls
