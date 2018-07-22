<template>
  <div class="city">
    <city-header></city-header>
    <city-selector></city-selector>
    <router-view></router-view>
  </div>
</template>

<script>
import CityHeader from "../city/citypages/header";
import CitySelector from "../city/citypages/selector";

export default {
  name: "City",
  components: {
    CityHeader,
    CitySelector
  }
};
</script>

<style lang="stylus" scoped>
</style>
