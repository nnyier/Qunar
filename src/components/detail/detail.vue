<template>
  <div class="detail">
    <detail-banner :bannerName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from "./detailpages/banner";
import DetailHeader from "./detailpages/header";
import DetailList from "./detailpages/list";
import axios from "axios";
export default {
  name: "Detail",
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      list: []
    };
  },
  // ajax请求
  mounted() {
    this.getDetailInfo();
  },
  methods: {
    getDetailInfo() {
      // 传入动态路由的id
      // axios.get("/api/detail.json?id=" + this.$route.params.id);
      axios
        .get("/api/detail.json", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleDetailDataSucc);
    },
    handleDetailDataSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
        this.list = data.categoryList;
      }
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
};
</script>

<style lang="stylus" scoped>
.content {
  height: 50rem;
  background: #eee;
}
</style>
