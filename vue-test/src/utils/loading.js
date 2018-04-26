/* eslint-disable */
import Vue from 'vue'
import loadingTemplate from '../components/loading.vue'
const Spinner = Vue.extend(loadingTemplate)
const parent = document.querySelectorAll('body')[0]
// const parent = document.getElementById('app')
export default {
  install: (Vue) => {
    const toggleLoading = (el, binding) => {
      // console.log('toggleLoading')
      // Vue.nextTick(() =>{
        const spinner = new Spinner({
          propsData: {
            text: binding.value.value,
            show: binding.value.show
          }
        })
        el.mask = document.createElement('div')
        parent.appendChild(el.mask)
        el.spinner = spinner.$el
        spinner.$mount(el.mask)
      // })
    }
    Vue.directive('loading', {
      bind (el, binding, vnode, oldVnode) {
        console.log('bind')
        toggleLoading(el, binding)
      },
      update (el, binding, vnode, oldVnode) {
        console.log('update')
        toggleLoading(el, binding)
      },
      componentUpdated (el, binding, vnode, oldVnode) {
        console.log('componentUpdated')
      },
      unbind (el, binding, vnode, oldVnode) {
        console.log('unbind')
        el.spinner &&
        el.spinner.parentNode &&
        el.spinner.parentNode.removeChild(el.spinner)
        el.mask &&
        el.mask.parentNode &&
        el.mask.parentNode.removeChild(el.mask)
      }
    })
  }
}
