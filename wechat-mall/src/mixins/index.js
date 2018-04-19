import wepy from 'wepy'
import urls from '../utils/fetchUrls'

export default class indexMixin extends wepy.mixin {
  data = {
    mixin: 'This is mixin data.'
  }
  methods = {
    tap () {
      this.mixin = 'mixin data was changed'
      console.log('mixin method tap')
    }
  }
  async fetchIndexSwiper () {
    return await wepy.request(urls.indexSwiper)
  }
  async fetchIndexTheme () {
    return await wepy.request({
      url: urls.indexTheme
    })
  }
  async fetchIndexDiscovery () {
    return await wepy.request(urls.indexDiscovery)
  }
  async fetchBrand (id) {
    return await wepy.request(`${urls.indexBrand}?id=${+id}`)
  }
  async fetchIndexList (brand, typeid) {
    return await wepy.request(`${urls.indexList}?brand=${brand}&typeid=${typeid}`)
  }
  async fetchIndexDetail (id) {
    return await wepy.request(`${urls.indexDetails}?id=${+id}`)
  }
}
