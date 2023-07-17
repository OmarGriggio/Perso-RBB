<template>
  <div class="playerManage">
    <div class="playerInput">
      <Input-Add-Player @add="addPlayer($event)"></Input-Add-Player>
    </div>
    <div class="showList">
      <ShowPlayersTeams></ShowPlayersTeams>
    </div>
    <div class="importAPI">
      <button v-on:click="loadAPI()">Charger API</button>
      <li v-for="player in players" v-bind:key="player.id">player loaded</li>
      <button @click="insertDatas">Cliquer pour insérer Data dans Liste</button>
    </div>
  </div>
</template>
<script>
import InputAddPlayer from "../components/InputAddPlayer.vue";
import axios from "axios";
import { nanoid } from "nanoid";

export default {
  components: {
    "Input-Add-Player": InputAddPlayer,
  },
  data() {
    return {
      players: [],
    };
  },
  methods: {
    async loadAPI() {
      const resultat = await axios.get(
        "https://script.google.com/macros/library/d/16iwDGMUioocCGcsEnDZguAAptNJ8vkbEEJwKySGQqrdoKF7V9sP6HbmS/5"
      );
      this.players = resultat.data;
    },
    insertDatas() {
      for (let index = 0; index < this.players.length; index++) {
        const player = {
          id: nanoid(),
          name: this.players[index].name,
          surname: this.players[index].surname,
          age: this.players[index].age,
          category: this.players[index].category,
          genre: this.players[index].genre,
          poste: this.players[index].poste,
          hasTeam: this.players[index].hasTeam,
          showTeam: this.players[index].showTeam,
          src: this.players[index].Photo,
        };
        this.$root.players.push(player);
      }
    },
    addPlayer: function (player) {
      this.$root.players.push(player);
      this.$root.savePlayer();
    },
  },
};
</script>
<style>
.playerManage .showList {
  padding: 2rem;
}
.playerManage .errMessage {
  color: red;
}
</style>
