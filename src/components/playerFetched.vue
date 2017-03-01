<!-- template for the player-fetched component. -->
<template>
  <tr class="player-fetched-template">
    <td>{{player.Name}}</td>
    <td>{{player.Team}}</td>
    <td>{{player.Set}}</td>
    <td>{{player.Points}}</td>
    <td>LINK</td>
    <td>
      <template v-for="position in Object.keys(player.playerPositions)">
        <button v-on:click="add(position)">{{ position }}</button>
      </template>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'playerFetched',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: {
    player: Object,
    index: Number
  },
  methods: {
    add(position){
      this.$store.commit({
        type: 'addPlayer',
        position: position,
        player: this.player
      });
    }
  }
}
</script>
