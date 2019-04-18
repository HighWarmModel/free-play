<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  computed: {},
  methods: {
  },
  created () {
  }
}
</script>

<style lang="stylus">
html,body
  margin 0
  #app
    max-width rems(750)
    margin 0 auto
</style>
