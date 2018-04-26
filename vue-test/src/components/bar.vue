<template>
  <div class="bar">
    子组件bar中的值{{barCount}}
    <span class="reduce" @click="addFoo">add foo count</span>
  </div>
</template>

<script>
export default {
  name: 'bar',
  data () {
    return {
      barCount: 0
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
  methods: {
    addFoo () {
      this.eventBus.$emit('addFoo', 2)
    }
  },
  mounted () {
    this.eventBus.$on('addBar', (num) => {
      this.barCount += num
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
