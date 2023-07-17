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
    <div class="container col-lg-4">
      <label for="age">Age:</label>
      <input
        class="form-control"
        v-model.number="player.age"
        type="number"
        id="age"
      />
    </div>
    <div class="container col-lg-4">
      <label for="category"
        >Catégorie :
        <select class="form-select" v-model="player.category" name="categorie">
          <option value="U14">U14</option>
          <option value="U16">U16</option>
          <option value="U18">U18</option>
          <option value="U20">U20</option>
          <option value="1LN">1LN</option>
        </select>
      </label>
    </div>
    <div class="container col-lg-4">
      <label class="form-check-label"
        ><input
          class="form-check-input"
          v-model="player.genre"
          type="radio"
          name="sexe"
          value="Homme"
        />
        Homme
      </label>
      <br />
      <label class="form-check-label"
        ><input
          class="form-check-input"
          v-model="player.genre"
          type="radio"
          name="sexe"
          value="Femme"
        />
        Femme
      </label>
    </div>
    <div class="container col-lg-4">
      <label>
        Poste :
        <select class="form-select" v-model="player.poste" name="poste">
          <option value="Meneur">Meneur</option>
          <option value="Ailier">Ailier</option>
          <option value="Ailier fort">Ailier fort</option>
          <option value="Arriere">Arrière</option>
          <option value="Pivot">Pivot</option>
        </select>
      </label>
    </div>
    <div class="container col-lg-4">
      <avatar-input
        v-model="form.avatar"
        @src="this.src = $event"
      ></avatar-input>
    </div>
    <div class="errMessage">
      <p v-if="errEmpty">Remplissez toutes les cases !</p>
      <p v-if="errAge">Age saisi incorrect !</p>
      <p v-if="playerAlreadyExist">Ce joueur existe déja</p>
    </div>
    <span class="container">
      <div class="container col-lg-4">
        <button class="btn btn-success" v-on:click="addPlayer()">
          Ajouter un joueur
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
import AvatarInput from "../components/AvatarInput.vue";
export default {
  emits: ["add"],
  components: {
    "avatar-input": AvatarInput,
  },
  data() {
    return {
      form: {
        avatar: null,
      },
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png",
      errEmpty: false,
      errAge: false,
      playerAlreadyExist: false,
      player: {
        name: "",
        surname: "",
        age: 0,
        category: "",
        genre: "",
        poste: "",
        image: this.avatar,
        hasTeam: false,
        showTeam: false,
      },
    };
  },
  methods: {
    addPlayer() {
      var player = {
        id: nanoid(),
        name: this.player.name,
        surname: this.player.surname,
        age: this.player.age,
        category: this.player.category,
        genre: this.player.genre,
        poste: this.player.poste,
        hasTeam: this.player.hasTeam,
        showTeam: this.player.showTeam,
        src: this.src,
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
