<template>
  <div class="playerManage">
    <div class="playerInput">
      <Input-Add-Player @add="addPlayer($event)"></Input-Add-Player>
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
        "https://script.google.com/macros/s/AKfycbyeQvkIO-7jrD4cH4STE2bze_sRCbnntdRuX9YSYjyLN1m9J6pIdmC8-84vDVEWUNU0/exec"
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
    async addPlayer(player) {
      const player1 = {
        name: "",
        address: {
          zip: 0,
        },
      };
      player1.name = player.name;
      player1.address.zip = player.address.zip;
      var data = { data: JSON.stringify(player1) };
      console.log(data);
      const result = await axios.post(
        "https://script.google.com/macros/s/AKfycbyacod1x1Gx6hnYAjM0r_crsmqEUyojE2YPdrBvcfmJgvl0SC3BZtTGKzr2rQ1_NOiu/exec",
        data
      );
      console.log(result.data.id);
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
