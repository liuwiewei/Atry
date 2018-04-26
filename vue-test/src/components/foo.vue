<template>
  <div class="foo">
    子组件foo中的值{{fooCount}}
    <span class="reduce" @click="addBar">add bar count</span>
  </div>
</template>

<script>
export default {
  name: 'foo',
  data () {
    return {
      fooCount: 0
    }
  },
  model: {
    prop: 'count',
    event: 'change'
  },
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    this.eventBus.$on('addFoo', (num) => {
      this.fooCount += num
    })
  },
  methods: {
    addBar () {
      this.eventBus.$emit('addBar', -1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
