<template>
  <div class="detail">
    <detail-banner></detail-banner>
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
export default {
  name: "Detail",
  data() {
    return {
      list: [
        {
          title: "成人票",
          children: [
            {
              title: "成人三票"
            },
            {
              title: "成人五票",
              children: [
                {
                  title: "成人三票--某馆"
                },
                {
                  title: "成人三票--某馆"
                }
              ]
            }
          ]
        },
        { title: "学生票" },
        { title: "儿童票" },
        { title: "特惠票" }
      ]
    };
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
}
</style>
