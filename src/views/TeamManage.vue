<template>
  <div class="teamManage">
    <span class="container col-lg-4"></span>
    <div class="container col-lg-4">
      <label for="teamName">Nom de l'equipe :</label>
      <input
        class="form-control"
        type="text"
        v-model="team.name"
        v-on:keyup.enter="ajouter"
        placeholder="Spurs"
      />
    </div>
    <br />
    <div class="container col-lg-4">
      <label for="category">Catégorie :</label>
      <select class="form-select" name="teamCategory" v-model="team.category">
        <option value="JuniorM">JuniorM</option>
        <option value="JuniorF">JuniorF</option>
        <option value="Loisirs">Loisirs</option>
        <option value="National">National</option>
      </select>
    </div>
    <div class="container col-lg-4">
      <label class="form-check-label"
        ><input
          class="form-check-input"
          v-model="team.genre"
          type="radio"
          value="Homme"
        />
        Homme
      </label>
      <br />
      <label class="form-check-label"
        ><input
          class="form-check-input"
          v-model="team.genre"
          type="radio"
          value="Femme"
        />
        Femme
      </label>
    </div>
    <br />
    <div class="container col-lg-4">
      <button type="button" class="btn btn-success" v-on:click="createTeam()">
        Créer {{ team.name }}
      </button>
    </div>
    <p v-if="empty">Veuillez remplir toutes les cases</p>
    <ul class="team-list">
      <div class="row row-cols-1 col-lg-12">
        <li
          v-bind:style="{
            display: 'flex',
            'flex-direction': 'row',
            'list-style': 'none',
          }"
          v-for="(team, index) in this.$root.teams"
          v-bind:key="index"
        >
          <div class="container">
            <div class="list-group">
              <button
                @click="showPlayers(team)"
                type="button"
                class="list-group-item list-group-item-action"
              >
                team name :{{ team.name }}
                <div class="container">
                  <div class="row row-cols-5">
                    <li
                      v-for="(player, index2) in this.$root.teams[index]
                        .players"
                      v-bind:style="{ 'margin-right': '5px', width: '19rem' }"
                      v-bind:key="index2"
                    >
                      <div class="team" v-if="team.vShowPlayers">
                        <div
                          class="card"
                          v-bind:style="{
                            display: 'flex',
                            'align-items': 'center',
                            'justify-content': 'center',
                          }"
                          style="width: 19rem"
                        >
                          <img
                            v-bind:style="{ width: '30%', height: '70px' }"
                            :src="player.src"
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body">
                            <h5 class="card-title">
                              {{ player.surname }} {{ player.name }}
                            </h5>
                          </div>
                          <div class="team">
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item">
                                {{ player.poste }}
                              </li>
                              <li class="list-group-item">
                                {{ player.genre }}
                              </li>
                              <li
                                class="btn btn-danger"
                                @click="deletePlayerFromTeam(player, team)"
                              >
                                Retirer
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </div>
                </div>
                <div class="errMessage">
                  <p v-if="team.hasClick && team.players.length < 1">
                    Cette équipe n'a pas de joueur!<br />
                    <a href="http://localhost:5173/playerManage"
                      ><button class="btn btn-primary">
                        Ajouter des joueurs
                      </button></a
                    >
                  </p>
                </div>
              </button>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-danger"
            v-on:click="deleteTeam(team)"
            aria-label="Close"
          >
            Supprimer
          </button>
        </li>
      </div>
    </ul>
  </div>
</template>
<script>
import { nanoid } from "nanoid";
import { isEmpty } from "../filter.js";

export default {
  data() {
    return {
      bool: false,
      empty: false,
      team: {
        hasClick: false,
        vShowPlayers: false,
        name: "",
        genre: "",
        category: "",
      },
    };
  },
  methods: {
    showPlayers(team) {
      team.hasClick = !team.hasClick;
      if (!this.bool) {
        team.vShowPlayers = !team.vShowPlayers;
      }
    },
    createTeam() {
      var team = {
        id: nanoid(),
        name: this.team.name,
        genre: this.team.genre,
        category: this.team.category,
        players: [],
      };
      if (!isEmpty(team)) {
        this.empty = false;
        this.$root.teams.push(team);
        this.$root.saveTeam();
      } else {
        this.empty = true;
      }
    },
    deleteTeam(team) {
      const index = this.$root.teams.indexOf(team);
      this.$root.teams.splice(index, 1);
      this.$root.saveTeam();
    },
    deletePlayerFromTeam(player, team) {
      const tIndex = this.$root.teams.indexOf(team);
      const pIndex = this.$root.teams[tIndex].players.indexOf(player);
      this.$root.teams[tIndex].players.splice(pIndex, 1);
      this.$root.saveTeam();
      this.bool = !this.bool;
    },
  },
};
</script>

<style>
.teamManage .team .card {
  width: 150px;
  height: 180px;
}
.teamManage .list-group button {
  text-align: center;
}
.teamManage .list-group {
  padding: 3px;
  flex-direction: row;
}
.teamManage .team-list {
  padding-top: 1rem;
}
.teamManage .team .list-group {
  flex-direction: row;
}
.teamManage .list-group li {
  padding-bottom: 5px;
}
.teamManage .errMessage {
  color: red;
}
</style>
