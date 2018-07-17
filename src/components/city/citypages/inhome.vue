<template>
    <div class="inhome">
        <city-list></city-list>
        <city-alphabet></city-alphabet>
    </div>
</template>

<script>
import CityList from "./list";
import CityAlphabet from "./alphabet";
export default {
  name: "CityInhome",
  components: {
    CityList,
    CityAlphabet
  }
};
</script>

<style lang="stylus" scoped>
</style>
