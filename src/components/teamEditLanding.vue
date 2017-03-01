<!-- template for the roster component. -->
<template>
  <div id="roster-template">
      <playerSearch></playerSearch>
      <currentRoster></currentRoster>
  </div>
</template>

<script>

  import playerSearch from './playerSearch.vue'
  import currentRoster from './currentRoster.vue'

  export default {
    name: 'teamEditLanding',
    data () {
      return {

      }
    },
    computed: {

    },
    components: {
      'currentRoster': currentRoster,
      'playerSearch': playerSearch
    }
  }
</script>

<style>
  #roster-template{
    width: 100%;
    display: inline-block;
  }
  playerSearch{
    float: left;
    width: 50%;
  }
  currentRoster{
    float: left;
    width: 50%;
  }
</style>
