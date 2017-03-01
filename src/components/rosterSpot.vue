<!-- template for the roster-spot component. -->
<template>
  <tr class="roster-spot-template">
    <td>{{spot.Position}}</td>
    <td>{{spot.Player.Name}}</td>
    <td>{{spot.Player.Team}}</td>
    <td>{{spot.Player.Set}}</td>
    <td>{{spot.Player.Points}}</td>
    <td>LINK</td>
    <td><button v-if="spot.Player.Name != ''" v-on:click="cut()">X</button></td>
  </tr>
</template>

<script>

export default {
  name: 'rosterSpot',
  data () {
    return {

    }
  },
  props: {
    spot: Object,
    index: Number
  },
  methods: {
    cut(){
      this.$store.commit('cutPlayer',this.index);
    }
  }
}
</script>
