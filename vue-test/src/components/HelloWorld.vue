<template>
  <div class="hello" v-loading="loadings">
    <!-- <span class="add" @click="add(1)">父组件+1</span> -->
    <foo></foo>
    <bar></bar>
  </div>
</template>

<script>

import foo from './foo'
import bar from './bar'
export default {
  name: 'HelloWorld',
  data () {
    return {
      count: 0,
      timer: null,
      loadings: {
        value: '加载中……',
        show: false
      }
    }
  },
  mounted () {
    this.timer && clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.loadings.show = false
      this.loadings.value = 'loading'
      console.log('外部改变布尔值')
    }, 2000)
  },
  methods: {
    add () {
      this.count += 1
    }
  },
  components: {
    foo,
    bar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add {
  border: 1px solid red;
}
</style>
