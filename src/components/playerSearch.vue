<!-- template for the player-search component. -->
<template>
  <div id="player-search-template">
    <h1>Player Search</h1>
    <input v-model="nameInput" id="name_search"/>
    <button v-on:click="search(this.event)">Search</button>
    <form>
      <input v-model="showPositions" type="radio" name="showpositions" value="Hitters"><label for="Hitters"> Hitters</label>
      <input v-model="showPositions" type="radio" name="showpositions" value="Pitchers"><label for="Hitters"> Pitchers</label>
      <input v-model="showPositions" type="radio" name="showpositions" value="All"><label for="All"> All</label>
    </form>
    <select v-model="specificPos">
      <option v-show="(showPositions == 'All')||(showPositions == 'Hitters')" value="C">C</option>
      <option v-show="(showPositions == 'All')||(showPositions == 'Hitters')" value="1B">1B</option>
      <option v-show="(showPositions == 'All')||(showPositions == 'Hitters')" value="2B">2B</option>
      <option v-show="(showPositions == 'All')||(showPositions == 'Hitters')" value="SS">SS</option>
      <option v-show="(showPositions == 'All')||(showPositions == 'Hitters')" value="3B">3B</option>
      <option v-show="(showPositions == 'All')||(showPositions == 'Hitters')" value="LF/RF">LF/RF</option>
      <option v-show="(showPositions == 'All')||(showPositions == 'Hitters')" value="CF">CF</option>
      <option v-show="(showPositions == 'All')||(showPositions == 'Hitters')" value="OF">OF</option>
      <option v-show="(showPositions == 'All')||(showPositions == 'Hitters')" value="DH">DH</option>
      <option v-show="(showPositions == 'All')||(showPositions == 'Pitchers')" value="SP">SP</option>
      <option v-show="(showPositions == 'All')||(showPositions == 'Pitchers')" value="RP">RP</option>
      <option v-show="(showPositions == 'All')||(showPositions == 'Pitchers')" value="Closer">Closer</option>
    </select>
    <select v-model="minOB" v-show="(showPositions == 'All')||(showPositions == 'Hitters')">
      <option value=4>4+</option>
      <option value=5>5+</option>
      <option value=6>6+</option>
      <option value=7>7+</option>
      <option value=8>8+</option>
      <option value=9>9+</option>
      <option value=10>10+</option>
    </select>
    <select v-model="minControl" v-show="(showPositions == 'All')||(showPositions == 'Pitchers')">
      <option value=0>0+</option>
      <option value=1>1+</option>
      <option value=2>2+</option>
      <option value=3>3+</option>
      <option value=4>4+</option>
      <option value=5>5+</option>
      <option value=6>6+</option>
    </select>
    <select v-model="pointRange">
      <option value=0>0-99</option>
      <option value=100>100-199</option>
      <option value=200>200-299</option>
      <option value=300>300-399</option>
      <option value=400>400-499</option>
      <option value=500>500-599</option>
      <option value=600>600+</option>
    </select>
    <table>
      <colgroup span="4"></colgroup>
      <tr>
        <th id="searchName">Name</th>
          <th>Team</th>
            <th>Set</th>
        <th id="searchPoints">Points</th>
        <th>IMG</th>
        <th>Position</th>
      </tr>
      <playerFetched
        v-for="(player, index) in searchquery" v-if="(player.Name.indexOf(nameInput) > -1)||(nameInput == '')"
        :player="player"
        :index="index">
      </playerFetched>
    </table>
  </div>
</template>

<script>

  import playerFetched from './playerFetched.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'playerSearch',
        data() {
          return {
            currentRoster: [],
            nameInput: '',
            showPositions: 'All',
            specificPos: '',
            minOB: '',
            minControl: '',
            pointRange: ''
            }
        },
        props: {

        },
        computed: {
          searchquery() {
              return this.$store.getters.searchPlayersByName;
            }
        },
        watch: {
          showPositions: function(e){
            console.log(e);
            this.specificPos = '';
            this.minOB = '';
            this.minControl = '';
            this.pointRange = '';
          }
        },
        methods: {

        },
        components: {
          'playerFetched': playerFetched
        }
    }

</script>

<style>
  #player-search-template{
    float: left;
    width: 50%;
  }
</style>
