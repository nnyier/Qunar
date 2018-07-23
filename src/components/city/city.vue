<template>
  <div class="city">
    <city-header></city-header>
    <city-selector></city-selector>
    <!-- <city-search></city-search> -->
    <router-view></router-view>
  </div>
</template>

<script>
import CityHeader from "../city/citypages/header";
import CitySelector from "../city/citypages/selector";
// import CitySearch from '../city/citypages/search'

export default {
  name: "City",
  components: {
    CityHeader,
    CitySelector
    // CitySearch
  }
};
</script>

<style lang="stylus" scoped>
</style>
