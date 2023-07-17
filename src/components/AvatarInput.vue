<template>
  <div class="showMembres">
    <img :src="src" alt="Avatar" class="img-fluid" />
    <button @click="browse()">Photo</button>
    <input
      type="file"
      accept="image/*"
      class="invisible"
      ref="file"
      @change="change"
    />
  </div>
</template>
<script>
export default {
  emits: ["input", "src"],
  props: {
    value: File,
  },
  data() {
    return {
      file: null,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png",
    };
  },
  methods: {
    browse() {
      this.$refs.file.click();
    },
    change(e) {
      this.file = e.target.files[0];
      this.$emit("input", this.file);
      let reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (e) => {
        let src = (this.src = e.target.result);
        this.$emit("src", src);
      };
    },
  },
};
</script>
<style>
.img-fluid {
  max-width: 20%;
}
</style>
