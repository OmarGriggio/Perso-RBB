<template>
  <div class="addPlayer">
    <span class="container">
      <div class="container col-lg-4">
        <img src="../assets/logo.png" />
      </div>
    </span>
    <div class="name">
      <div class="container col-lg-4">
        <label for="name">Prénom:</label><br />
        <input
          class="form-control"
          v-model="player.name"
          type="text"
          id="name"
        />
      </div>
    </div>
    <div class="container col-lg-4">
      <div class="surname">
        <label for="surname">Nom :</label>
        <input
          class="form-control"
          v-model="player.surname"
          type="text"
          id="surname"
        />
      </div>
    </div>
    <div class="name">
      <div class="container col-lg-4">
        <label for="name">Date de naissance:</label><br />
        <input v-model="player.birthday" type="date" id="name" />
      </div>
    </div>
    <div class="container col-lg-4">
      <div class="surname">
        <label for="surname">Adresse:</label>
        <input
          class="form-control"
          v-model="player.address.street"
          type="text"
          id="surname"
        />
      </div>
    </div>
    <div class="container col-lg-4">
      <div class="surname">
        <label for="surname">Code Postal:</label>
        <input
          class="form-control"
          v-model="player.address.zip"
          type="text"
          id="surname"
        />
      </div>
    </div>
    <div class="container col-lg-4">
      <div class="surname">
        <label for="surname">Ville :</label>
        <input
          class="form-control"
          v-model="player.address.city"
          type="text"
          id="surname"
        />
      </div>
    </div>
    <div class="container col-lg-4">
      <div class="surname">
        <label for="surname">téléphone :</label>
        <input
          class="form-control"
          v-model="player.phone"
          type="text"
          id="surname"
        />
      </div>
    </div>
    <div class="container col-lg-4">
      <div class="surname">
        <label for="surname">mail :</label>
        <input
          class="form-control"
          v-model="player.mail"
          type="text"
          id="surname"
        />
      </div>
    </div>
    <div class="errMessage">
      <p v-if="errEmpty">Remplissez toutes les cases !</p>
      <p v-if="errAge">Age saisi incorrect !</p>
      <p v-if="playerAlreadyExist">Ce joueur existe déjà !</p>
    </div>
    <span class="container">
      <div class="container col-lg-4">
        <button class="btn btn-success" v-on:click="addPlayer()">
          Enregistrer
        </button>
      </div>
    </span>
  </div>
</template>
<script>
import { isEmpty } from "../filter.js";
import { ageControl } from "../filter.js";
import { playerAlreadyExist } from "../filter.js";
import { nanoid } from "nanoid";

export default {
  emits: ["add"],
  data() {
    return {
      errEmpty: false,
      errAge: false,
      playerAlreadyExist: false,
      player: {
        name: "",
        surname: "",
        birthday: Date,
        address: {
          street: "",
          zip: 0,
          city: "",
        },
        mail: "",
        phone: 0,
        sexe: "M",
      },
    };
  },
  methods: {
    addPlayer() {
      var player = {
        id: nanoid(),
        name: this.player.name,
        surname: this.player.surname,
        birthday: this.player.birthday,
        address: {
          street: this.player.address.street,
          zip: this.player.address.zip,
          city: this.player.address.city,
        },
        mail: this.player.mail,
        phone: this.player.phone,
        sexe: this.player.sexe,

      };
      if (!isEmpty(player)) {
        this.errEmpty = false;
        if (!ageControl(player)) {
          this.errAge = false;
          if (!playerAlreadyExist(player, this.$root.players)) {
            this.playerAlreadyExist = false;
            this.$emit("add", player);
          } else {
            this.playerAlreadyExist = true;
          }
        } else {
          this.errAge = true;
        }
      } else {
        this.errEmpty = true;
      }
    },
  },
};
</script>
<style>
.addPlayer .errMessage {
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
}
</style>
