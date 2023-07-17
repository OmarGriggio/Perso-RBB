<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <span class="container col-lg"></span>
    <div class="container-fluid">
      <router-link class="nav-link active" aria-current="page" to="/">
        <img
          src="./assets/logo.png"
          alt="Logo"
          width="50"
          height="20"
          class="d-inline-block align-text-top"
        />
      </router-link>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <span class="container col-lg-4"></span>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="dropdown-item" to="/playerManage">
              Gérer membres
            </router-link>
          </li>
        </ul>
        <span class="container col-lg-5"></span>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    const teams = JSON.parse(localStorage.getItem("teamList") || "[]");
    const players = JSON.parse(localStorage.getItem("playerList") || "[]");
    return {
      sexErr: false,
      playerIsInTeam: false,
      teams: teams,
      players: players,
    };
  },
  methods: {
    saveTeam() {
      localStorage.setItem("teamList", JSON.stringify(this.teams));
    },
    savePlayer() {
      localStorage.setItem("playerList", JSON.stringify(this.players));
    },
  },
};
</script>

<style></style>
