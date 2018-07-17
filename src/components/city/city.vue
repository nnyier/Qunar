<template>
  <div class="city">
    <city-header></city-header>
    <city-selector></city-selector>
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from "axios";
import CityHeader from "../city/citypages/header";
import CitySelector from "../city/citypages/selector";

export default {
  name: "City",
  // data() {
  //   return {
  //     cities: {},
  //     hotCities: []
  //   };
  // },
  // mounted() {
  //   this.getCityInfo();
  // },
  // methods: {
  //   getCityInfo() {
  //     axios.get("/api/city.json").then(this.handleGetCityInfoSucc);
  //   },
  //   handleGetCityInfoSucc(res) {
  //     res = res.data;
  //     if (res.ret && res.data) {
  //       const data = res.data;
  //       this.cities = data.cities;
  //       this.hotCities = data.hotCities;
  //     }
  //     console.log(res);
  //   }
  // },
  components: {
    CityHeader,
    CitySelector
  }
};
</script>

<style lang="stylus" scoped>
</style>
