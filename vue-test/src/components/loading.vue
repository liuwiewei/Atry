<template>
  <div class="loading_wrap" :class="{'show_loading': show}" v-if="show">
    <p class="loading">{{text}}--{{show}}</p>
  </div>
</template>

<script>
export default {
  name: 'v-loading',
  props: {
    show: Boolean,
    text: {
      type: String,
      default: '………………'
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
    shows () {
      // console.log('-----------')
      // console.log(old)
      // console.log(news)
      // console.log('================')
      this.$forceUpdate()
      return this.show
    }
  },
  watch: {
    show: function (vals) {
      console.log(3333333)
      console.log(vals)
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loading_wrap {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right:0
}
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}
.show_loading {
  animation: lineAnimate .2s linear 0s 1;
}
  @keyframes lineAnimate {
    0% {
      height: 0%;
      width: 0%;
      top: 50%;
      left: 50%;
    }
    50% {
      height: 50%;
      width: 50%;
    }
    100% {
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
    }
  }
</style>
