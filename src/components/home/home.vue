<template>
  <div class="home">
    <home-header :city="city"></home-header>
    <home-swiper :swiperlist="swiperList"></home-swiper>
    <home-icons :iconlist="iconList"></home-icons>
    <home-recommend :recolist="recommendList"></home-recommend>
    <home-weekend :weeklist="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./homepages/header";
import HomeSwiper from "./homepages/swiper";
import HomeIcons from "./homepages/icons";
import HomeRecommend from "./homepages/recommend";
import HomeWeekend from "./homepages/weekend";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      city: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  mounted() {
    this.getHomeInfo();
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json").then(this.getHomeSucc);
    },
    getHomeSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const resData = res.data;
        this.city = resData.city;
        this.swiperList = resData.swiperList;
        this.iconList = resData.iconList;
        this.recommendList = resData.recommendList;
        this.weekendList = resData.weekendList;
      }
      console.log(res);
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
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
