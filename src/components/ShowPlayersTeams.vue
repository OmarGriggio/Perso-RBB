<template>
  <div class="showPlayersTeams">
    <transition-group
      name="fade"
      tag="ul"
      v-bind:style="{
        display: 'flex',
        'flex-direction': 'row',
        'list-style': 'none',
      }"
    >
      <div class="container">
        <div
          class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 gap-4"
        >
          <li
            v-for="player in this.copyListPlayers"
            v-bind:style="{ 'margin-right': '20px' }"
            v-bind:key="player.id"
          >
            <div class="col">
              <div
                class="card"
                v-bind:style="{
                  display: 'flex',
                  'align-items': 'center',
                  'justify-content': 'center',
                }"
                style="width: 18rem"
              >
                <img
                  v-bind:style="{ width: '50%', height: '150px' }"
                  :src="player.src"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">
                    {{ player.surname }} {{ player.name }}
                  </h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">{{ player.age }} ans</li>
                  <li class="list-group-item">{{ player.poste }}</li>
                  <li class="list-group-item">{{ player.genre }}</li>
                </ul>
                <div class="card-body">
                  <modal variant="succes" :visible="false">
                    <template v-slot:main>
                      <show-team
                        @add="addPlayerToTeam($event, player)"
                      ></show-team>
                      <div class="errMessage container col-lg-11">
                        <p v-if="this.$root.sexErr">
                          L'équipe n'accepte pas le genre opposé
                        </p>
                      </div>
                    </template>
                  </modal>
                  <button
                    class="btn btn-danger"
                    v-on:click="deletePlayer(player)"
                  >
                    Supprimer Joueur
                  </button>
                </div>
              </div>
            </div>
          </li>
        </div>
      </div>
    </transition-group>
  </div>
</template>
<script>
import { playerAlreadyInTeam } from "../filter.js";
import { sexControle } from "../filter.js";
import ModalCompo from "../components/ModalCompo.vue";
import ShowTeam from "./ShowTeam.vue";
export default {
  components: {
    modal: ModalCompo,
    "show-team": ShowTeam,
  },
  props: {
    msg: String,
    visible: Boolean,
  },
  data() {
    return {
      copyListPlayers: this.$root.players,
    };
  },
  methods: {
    addPlayerToTeam(team, player) {
      const players = team.players;
      if (sexControle(team, player)) {
        this.$root.sexErr = false;
        if (!playerAlreadyInTeam(player, players)) {
          this.$root.playerIsInTeam = false;
          const tIndex = this.$root.teams.indexOf(team);
          this.$root.teams[tIndex].players.push(player);
          const pIndex = this.$root.players.indexOf(player);
          this.$root.players[pIndex].hasTeam = true;
          this.copyListPlayers.splice(pIndex, 1);
          this.save();
        } else {
          this.$root.playerIsInTeam = true;
        }
      } else {
        this.$root.sexErr = true;
      }
    },
    save() {
      this.$root.playerIsInTeam = false;
      this.$root.saveTeam();
      this.$root.savePlayer();
    },
    deletePlayer(player) {
      const index = this.$root.players.indexOf(player);
      this.$root.players.splice(index, 1);
      this.save();
    },
  },
};
</script>
<style>
.showPlayersTeams ul {
  display: flex;
  flex-direction: column;
  list-style: none;
}
.showPlayersTeams .fade-move,
.showPlayersTeams .fade-enter-active,
.showPlayersTeams .fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.showPlayersTeams .fade-enter-from,
.showPlayersTeams .fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

.showPlayersTeams .fade-leave-active {
  position: absolute;
}
</style>
