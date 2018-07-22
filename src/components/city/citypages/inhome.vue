<template>
  <div class="inhome">
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import axios from "axios";
import CityList from "./list";
import CityAlphabet from "./alphabet";
export default {
  name: "CityInhome",
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ""
    };
  },
  mounted() {
    this.getCityInfo();
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(this.handleGetCityInfoSucc);
    },
    handleGetCityInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handleLetterChange(letter) {
      this.letter = letter;
      console.log(letter);
    }
  },
  components: {
    CityList,
    CityAlphabet
  }
};
</script>

<style lang="stylus" scoped>
</style>
