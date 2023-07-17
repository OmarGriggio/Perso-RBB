<template>
  <div class="about">
    <div class="container">
      <div class="d-flex align-items-center">
        <div
          class="card mx-auto"
          style="width: 18rem"
          v-for:="username in usernames"
          v-bind:key="username"
        >
          <a :href="profiles[username].html_url" target="_blank">
            <img
              v-if="profiles[username]"
              v-bind:src="profiles[username].avatar_url"
              class="card-img-top rounded-circle"
              alt="..."
            />
          </a>
          <div class="card-body">
            <div class="container">
              <div class="d-flex justify-content-center">
                <h5 class="card-title">
                  {{ username }}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      usernames: ["NeedSomMilk", "omargriggio"],
      profiles: {},
    };
  },
  created() {
    this.fetchProfiles();
  },
  methods: {
    async fetchProfiles() {
      for (const username of this.usernames) {
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );
        this.profiles[username] = response.data;
      }
    },
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 70vh;
    display: flex;
    align-items: center;
  }
}

.about .card {
  width: 190px;
  height: 288px;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 20px;
  transition: all 0.3s;
}

.about .card2 {
  width: 190px;
  height: 300px;
  background-color: #1a1a1a;
  border-radius: ;
  transition: all 0.2s;
}

.about .card2:hover {
  transform: scale(0.98);
  border-radius: 20px;
}

.about .card:hover {
  box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
}
</style>
