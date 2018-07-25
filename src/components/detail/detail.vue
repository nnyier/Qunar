<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from "./detailpages/banner";
import DetailHeader from "./detailpages/header";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader
  }
};
</script>

<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>
