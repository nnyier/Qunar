<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from "../city/citypages/header";
import CitySearch from "../city/citypages/search";

export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch
  }
};
</script>

<style lang="stylus" scoped>
</style>
