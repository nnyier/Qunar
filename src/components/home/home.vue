<template>
  <div class="home">
    <!-- <home-header :city="city"></home-header> -->
    <home-header></home-header>
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
import { mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  computed: {
    ...mapState(["city"])
  },
  mounted() {
    this.lastCity = this.city;
    this.getHomeInfo();
  },
  // keepalive的生命周期钩子
  // 页面首次加载会执行mounted钩子和activated钩子，页面切换时只会执行activated钩子
  activated() {
    // 城市名称改变时，重新发送ajax请求，这样keepalive的内容也可以更改了
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
    console.log("activated");
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json?city=" + this.city).then(this.getHomeSucc);
    },
    getHomeSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const resData = res.data;
        // this.city = resData.city;
        this.swiperList = resData.swiperList;
        this.iconList = resData.iconList;
        this.recommendList = resData.recommendList;
        this.weekendList = resData.weekendList;
      }
      // console.log(res);
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
