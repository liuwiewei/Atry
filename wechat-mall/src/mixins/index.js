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
}
