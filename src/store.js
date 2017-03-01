import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    searchquery: [
      {"GUID":"123","Name":"Bobby Abreu","Team":"Phillies","Set":"2000","Hand":"L","Points":550,"playerPositions":{"LFRF": 1},"Speed":"A","OnBase":10},
      {"GUID":"123","Name":"Edgardo Alfonzo","Team":"Mets","Set":"2000","Hand":"R","Points":350,"playerPositions":{"2B": 5},"Speed":"B","OnBase":9},
      {"GUID":"123","Name":"Roberto Alomar","Team":"Indians","Set":"2000","Hand":"S","Points":560,"playerPositions":{"2B": 3},"Speed":"A","OnBase":10},
      {"GUID":"123","Name":"Derek Jeter","Team":"Yankees","Set":"2000","Hand":"R","Points":490,"playerPositions":{"SS": 3},"Speed":"B","OnBase":10},
      {"GUID":"123","Name":"Chipper Jones","Team":"Braves","Set":"2000","Hand":"S","Points":610,"playerPositions":{"3B": 2, "DH":0},"Speed":"A","OnBase":10},
      {"GUID":"123","Name":"Jeff Bagwell","Team":"Astros","Set":"2000","Hand":"R","Points":570,"playerPositions":{"1B": 0},"Speed":"A","OnBase":10},
      {"GUID":"123","Name":"Jason Kendall","Team":"Pirates","Set":"2000","Hand":"R","Points":460,"playerPositions":{"C": 9, "DH": 0},"Speed":"A","OnBase":10},
      {"GUID":"123","Name":"Rickey Henderson","Team":"Mets","Set":"2000","Hand":"R","Points":450,"playerPositions":{"LFRF": 1},"Speed":"A","OnBase":10},
      {"GUID":"123","Name":"Randy Johnson","Team":"Diamondbacks","Set":"2000","Hand":"L","Points":630,"playerPositions":{"SP":0},"IP":8,"Control":3},
      {"GUID":"123","Name":"Greg Maddux","Team":"Braves","Set":"2000","Hand":"R","Points":480,"playerPositions":{"SP":0},"IP":7,"Control":5},
      {"GUID":"123","Name":"Pedro Martinez","Team":"Red Sox","Set":"2000","Hand":"R","Points":660,"playerPositions":{"SP":0},"IP":7,"Control":5},
      {"GUID":"123","Name":"Kevin Millwood","Team":"Braves","Set":"2000","Hand":"R","Points":550,"playerPositions":{"SP":0},"IP":7,"Control":3},
      {"GUID":"123","Name":"Brad Radke","Team":"Twins","Set":"2000","Hand":"R","Points":480,"playerPositions":{"SP":0},"IP":7,"Control":4},
      {"GUID":"123","Name":"Mariano Rivera","Team":"Yankees","Set":"2000","Hand":"R","Points":210,"playerPositions":{"Closer":0},"IP":1,"Control":4},
      {"GUID":"123","Name":"Curt Schilling","Team":"Phillies","Set":"2000","Hand":"R","Points":600,"playerPositions":{"SP":0},"IP":6,"Control":8},
      {"GUID":"123","Name":"Billy Wagner","Team":"Astros","Set":"2000","Hand":"L","Points":230,"playerPositions":{"Closer":0},"IP":1,"Control":5},
      {"GUID":"123","Name":"Scott Williamson","Team":"Reds","Set":"2000","Hand":"R","Points":190,"playerPositions":{"Closer":0},"IP":1,"Control":3},
      {"GUID":"123","Name":"Jeff Zimmerman","Team":"Rangers","Set":"2000","Hand":"R","Points":180,"playerPositions":{"RP":0},"IP":1,"Control":4},
      {"GUID":"123","Name":"Kevin Brown","Team":"Dodgers","Set":"2000","Hand":"R","Points":600,"playerPositions":{"SP":0},"IP":7,"Control":5},
      {"GUID":"123","Name":"Rogers Clemens","Team":"Yankees","Set":"2000","Hand":"R","Points":400,"playerPositions":{"SP":0},"IP":6,"Control":3},
      {"GUID":"123","Name":"David Cone","Team":"Yankees","Set":"2000","Hand":"R","Points":460,"playerPositions":{"SP":0},"IP":6,"Control":5},
      {"GUID":"123","Name":"Chuck Finley","Team":"Angels","Set":"2000","Hand":"L","Points":470,"playerPositions":{"SP":0},"IP":6,"Control":5},
      {"GUID":"123","Name":"Mike Hampton","Team":"Astros","Set":"2000","Hand":"L","Points":470,"playerPositions":{"SP":0},"IP":7,"Control":3},
      {"GUID":"123","Name":"Trevor Hoffman","Team":"Padres","Set":"2000","Hand":"R","Points":200,"playerPositions":{"Closer":0},"IP":1,"Control":4}
    ],
    roster: [
      {"Position": "C","Player":{"GUID":"123","Name":"Bobby Abreu","Team":"Phillies","Set":"2000","Hand":"L","Points":550,"playerPositions":[{"LFRF": 1}],"Speed":"A","OnBase":10}},
      {"Position": "1B","Player":{"GUID":"123","Name":"Edgardo Alfonzo","Team":"Mets","Set":"2000","Hand":"R","Points":350,"playerPositions":[{"2B": 5}],"Speed":"B","OnBase":9}},
      {"Position": "2B","Player":{"GUID":"123","Name":"Roberto Alomar","Team":"Indians","Set":"2000","Hand":"S","Points":560,"playerPositions":[{"2B": 3}],"Speed":"A","OnBase":10}},
      {"Position": "3B","Player":{"GUID":"123","Name":"Derek Jeter","Team":"Yankees","Set":"2000","Hand":"R","Points":490,"playerPositions":[{"SS": 3}],"Speed":"B","OnBase":10}},
      {"Position": "SS","Player":{"GUID":"123","Name":"Chipper Jones","Team":"Braves","Set":"2000","Hand":"S","Points":610,"playerPositions":[{"3B": 2}],"Speed":"A","OnBase":10}},
      {"Position": "CF","Player":{"GUID":"123","Name":"Jeff Bagwell","Team":"Astros","Set":"2000","Hand":"R","Points":570,"playerPositions":[{"1B": 0}],"Speed":"A","OnBase":10}},
      {"Position": "OF","Player":{"GUID":"123","Name":"Jason Kendall","Team":"Pirates","Set":"2000","Hand":"R","Points":460,"playerPositions":[{"C": 9}],"Speed":"A","OnBase":10}},
      {"Position": "OF","Player":{"GUID":"123","Name":"","Team":"","Set":"","Hand":"","Points":0,"playerPositions":[],"Speed":"","OnBase":0}},
      {"Position": "SP","Player":{"GUID":"123","Name":"Randy Johnson","Team":"Diamondbacks","Set":"2000","Hand":"L","Points":630,"playerPositions":"LHP","IP":8,"Control":3}},
      {"Position": "SP","Player":{"GUID":"123","Name":"Greg Maddux","Team":"Braves","Set":"2000","Hand":"R","Points":480,"playerPositions":"RHP","IP":7,"Control":5}},
      {"Position": "SP","Player":{"GUID":"123","Name":"Pedro Martinez","Team":"Red Sox","Set":"2000","Hand":"R","Points":660,"playerPositions":"RHP","IP":7,"Control":5}},
      {"Position": "SP","Player":{"GUID":"123","Name":"Kevin Millwood","Team":"Braves","Set":"2000","Hand":"R","Points":550,"playerPositions":"RHP","IP":7,"Control":3}},
      {"Position": "SP","Player":{"GUID":"123","Name":"Brad Radke","Team":"Twins","Set":"2000","Hand":"R","Points":480,"playerPositions":"RHP","IP":7,"Control":4}},
      {"Position": "RP","Player":{"GUID":"123","Name":"","Team":"","Set":"","Hand":"","Points":0,"playerPositions":"","IP":0,"Control":0}},
      {"Position": "RP","Player":{"GUID":"123","Name":"","Team":"","Set":"","Hand":"","Points":0,"playerPositions":"","IP":0,"Control":0}},
      {"Position": "RP","Player":{"GUID":"123","Name":"","Team":"","Set":"","Hand":"","Points":0,"playerPositions":"","IP":0,"Control":0}},
      {"Position": "DH","Player":{"GUID":"123","Name":"","Team":"","Set":"","Hand":"","Points":0,"playerPositions":[],"Speed":"","OnBase":0}},
      {"Position": "BE","Player":{"GUID":"123","Name":"","Team":"","Set":"","Hand":"","Points":0,"playerPositions":[],"Speed":"","OnBase":0}},
      {"Position": "BE","Player":{"GUID":"123","Name":"","Team":"","Set":"","Hand":"","Points":0,"playerPositions":[],"Speed":"","OnBase":0}},
      {"Position": "BE","Player":{"GUID":"123","Name":"","Team":"","Set":"","Hand":"","Points":0,"playerPositions":[],"Speed":"","OnBase":0}}
    ]
  },
  getters:{
    getRoster: state => state.roster,
    searchPlayersByName(state){
      return state.searchquery;
    }

  },
  mutations:{
    cutPlayer(state, index){
      if ((state.roster[index].Position == {"SP":0})||(state.roster[index].Position == [{"RP":0}])){
        state.roster[index].Player.GUID = "";
        state.roster[index].Player.Name = "";
        state.roster[index].Player.Team = "";
        state.roster[index].Player.Set = "";
        state.roster[index].Player.Hand = "";
        state.roster[index].Player.Points = 0;
        state.roster[index].Player.playerPositions = "";
        state.roster[index].Player.IP = 0;
        state.roster[index].Player.Control = 0;
      }
      else{
        state.roster[index].Player.GUID = "";
        state.roster[index].Player.Name = "";
        state.roster[index].Player.Team = "";
        state.roster[index].Player.Set = "";
        state.roster[index].Player.Hand = "";
        state.roster[index].Player.Points = 0;
        state.roster[index].Player.playerPositions = [];
        state.roster[index].Player.Speed = "";
        state.roster[index].Player.OnBase = 0;
      }
      return index;
    },
    addPlayer(state, payload){
      /*logic going to get a little wonky, to be consistent across all the positions initially I'm going to force the user to open up a slot prior to adding a player to it
      concern is that if it's a replace action, which slot gets replaced if say, all the SP spots are full? FIFO? Stack? Queue? May want to revisit later*/

      let pushPlayer = function(index){
        for (var prop in state.roster[index].Player){
          if (payload.player.hasOwnProperty(prop)){
            state.roster[index].Player[prop] = payload.player[prop];
          }
        }
      }

      //sigh, for ease of understanding it's the trusty switch statement for dolling out where the add goes to
      switch(payload.position){
        case 'C':
        case '1B':
        case '2B':
        case '3B':
        case 'SS':
        case 'DH':
          //REVISIT - seems pretty messy as a means to get the index for the position, has to be a more clever way to do this
          let getPosIndex = function(){
            for (let x = 0; x < 20; x++){
              if (payload.position == state.roster[x].Position){
                console.log(state.roster[x].Position);
                return x;
              }
            }
          }
          let posIndex = getPosIndex(payload.position);
          //checks are the same for each of these: check their position first, then DH, then BE for a free slot and add contents if found
          if (state.roster[posIndex].Player.Name === ""){
            pushPlayer(posIndex);
          }
          else{
            for (let x = 16; x < 20; x++){  //cheating here a bit because we know the index of DH and the bench slots in the roster array
              if (state.roster[x].Player.Name === ""){
                pushPlayer(x);
                break;
              }
            }
          }
          break;
        case 'LFRF':
          //check the OF spots (which are either LF or RF) then move to DH/BE spots
          if (state.roster[6].Player.Name === ""){
            pushPlayer(6);
          }
          else if (state.roster[7].Player.Name === ""){
            pushPlayer(7);
          }
          else{
            for (let x = 16; x < 20; x++){  //cheating here a bit because we know the index of DH and the bench slots in the roster array
              if (state.roster[x].Player.Name === ""){
                pushPlayer(x);
                break;
              }
            }
          }
          break;
        case 'CF':
          //check the OF spots (which are either LF or RF) then move to DH/BE spots
          if (state.roster[5].Player.Name === ""){
            pushPlayer(5);
          }
          else{
            for (let x = 16; x < 20; x++){  //cheating here a bit because we know the index of DH and the bench slots in the roster array
              if (state.roster[x].Player.Name === ""){
                pushPlayer(x);
                break;
              }
            }
          }
          break;
        case 'OF':
          if (state.roster[5].Player.Name === ""){
            pushPlayer(5);
          }
          else if (state.roster[6].Player.Name === ""){
            pushPlayer(6);
          }
          else if (state.roster[7].Player.Name === ""){
            pushPlayer(7);
          }
          else{
            for (let x = 16; x < 20; x++){  //cheating here a bit because we know the index of DH and the bench slots in the roster array
              if (state.roster[x].Player.Name === ""){
                pushPlayer(x);
                break;
              }
            }
          }
          break;
        case 'SP':
          for (let x = 8; x < 13; x++){  //cheating here a bit because we know the index of DH and the bench slots in the roster array
            if (state.roster[x].Player.Name === ""){
              pushPlayer(x);
              break;
            }
          }
          break;
          case 'RP':
          case 'Closer':
          console.log(payload.position);
            for (let x = 13; x < 16; x++){  //cheating here a bit because we know the index of DH and the bench slots in the roster array
              if (state.roster[x].Player.Name === ""){
                pushPlayer(x);
                break;
              }
            }
            break;
        default:
          //might want to throw an error here if it didn't match anything
          break;
      }
    }
  }
});
