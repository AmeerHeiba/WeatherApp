<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Search Here"
      v-model="query"
      @keyup.enter="searchCity"
    />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    searchCity() {
      this.$emit("search", this.query);
    },
  },
};
</script>

<style>
.search-bar {
  background-color: #24343dff;
  border-radius: 12px;
  padding: 10px 30px;
  max-width: 100%;
  margin: 0 auto 50px;
}

.search-bar input {
  border: none;
  background: none;
  color: white;
  font-size: 23px;
  font-weight: 275;
  width: 100%;
  outline: none;
}
</style>
