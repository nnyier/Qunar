<template>
  <div class="home">
    <home-header></home-header>
    hello HelloWorld
  </div>
</template>

<script>
import HomeHeader from "./homepages/header";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    HomeHeader
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
