<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div>
      test
    </div>
  </div>
</template>

<script>
import HomeHeader from "./homepages/header";
import HomeSwiper from "./homepages/swiper";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    HomeHeader,
    HomeSwiper
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
