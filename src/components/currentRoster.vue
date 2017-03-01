<!-- template for the roster component. -->
<template>
  <div id="currentRoster-template">
    <div>
      <h1>Team Name Goes Here</h1>
      <button>edit</button>
    </div>
    <h2>Points Remaining: {{pointsRemaining}}</h2>
    <table>
      <colgroup span="4"></colgroup>
      <tr>
        <th>Position</th>
        <th>Name</th>
        <th>Team</th>
        <th>Set</th>
        <th>Points</th>
        <th>IMG</th>
        <th>Cut</th>
      </tr>
      <roster-spot
        v-for="(spot, index) in getRoster"
        :spot="spot"
        :index="index">
      </roster-spot>
    </table>
    <div>
      <button>Save</button>
      <button>Clear All</button>
    </div>
  </div>
</template>

<script>

  import rosterSpot from './rosterSpot.vue'

  export default {
    name: 'currentRoster',
    data () {
      return {

      }
    },
    computed: {
      getRoster() {
          return this.$store.getters.getRoster;
        },
      pointsRemaining: function(){
        var sum = 0;
        for (var x=0; x<this.getRoster.length; x++){
          sum+=this.getRoster[x].Player.Points;
        }
        return 5000 - sum;
      }
    },
    components: {
      'roster-spot': rosterSpot
    }
  }
</script>

<style>
  #currentRoster-template{
    float: left;
    width: 50%;
  }
</style>
