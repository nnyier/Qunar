<template>
    <div class="wrapper">
        <!-- 给图片增加一个父级 网速慢的时候先让图片的固定位置渲染 -->
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar" slot="scrollbar"></div> -->
        </swiper>
    </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        autoplay: true
      },
      swiperList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1806/a1/e645466a5a1c9a02.jpg_750x200_9c489fbd.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1806/f5/ea83238744f31102.jpg_750x200_73b8477c.jpg"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1806/ae/2f9a9f0bbc30e102.jpg_750x200_75b6a866.jpg"
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1806/5f/171e04d556e40a02.jpg_750x200_424c4ddd.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
// 样式穿透
.wrapper>>>.swiper-pagination-bullet-active {
    background: #fff !important;
}

.wrapper {
    // 保持高宽比始终26.7%
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 26.7%;
    background: #eee;

    .swiper-img {
        width: 100%;
    }
}
</style>
