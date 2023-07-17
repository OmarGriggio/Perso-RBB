<template>
  <ul>
    <li
      v-bind:style="{
        display: 'flex',
        'flex-direction': column,
        'list-style': 'none',
      }"
      v-for="team in this.$root.teams"
      v-bind:key="team.id"
    >
      <div class="list-group">
        <button
          @click="addPlayerToTeam(team)"
          type="button"
          class="list-group-item list-group-item-action"
        >
          team name :{{ team.name }}
        </button>
      </div>
    </li>
    <p v-if="this.$root.playerIsInTeam">Ce joueur est déja dans cette équipe</p>
  </ul>
</template>
<script>
export default {
  emits: ["add"],
  data() {
    return {};
  },
  methods: {
    addPlayerToTeam(team) {
      this.$emit("add", team);
    },
  },
};
</script>
<style>
ul {
  display: flex;
  flex-direction: column;
  list-style: none;
}
</style>
