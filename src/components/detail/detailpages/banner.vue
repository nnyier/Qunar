<template>
    <div class="detail-banner">
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_600x330_866232e3.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">上海玛雅海滩水公园</div>
                <div class="banner-number">
                    <i class="iconfont banner-icon">&#xe6f5;</i>39
                </div>
            </div>
        </div>
        <common-gallary @close="handleGallaryClose" v-show="showGallary" :imgs="imgs"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from "../../../base/gallary/gallary";
export default {
  name: "DetailBanner",
  data() {
    return {
      showGallary: false,
      imgs: [
        "//img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_600x330_866232e3.jpg",
        "//img1.qunarzz.com/sight/p0/1609/80/8092254b7f5f016ea3.water.jpg_600x330_45017f19.jpg"
      ]
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  },
  components: {
    CommonGallary
  }
};
</script>

<style lang="stylus" scoped>
.detail-banner {
    .banner {
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 55%;
        position: relative;

        .banner-img {
            width: 100%;
        }

        .banner-info {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            line-height: 0.6rem;
            display: flex;
            color: #fff;
            background-image: linear-gradient(top, rgba(0, 0, 0, 0, ), rgba(0, 0, 0, 0.8));

            .banner-title {
                flex: 1;
                font-size: 0.32rem;
                padding: 0 0.2rem;
            }

            .banner-number {
                padding: 0 0.4rem;
                height: 0.32rem;
                line-height: 0.32rem;
                font-size: 0.24rem;
                border-radius: 0.2rem;
                background: rgba(0, 0, 0, 0.8);
                margin-top: 0.14rem;

                .banner-icon {
                    font-size: 0.24rem;
                    margin-right: 0.1rem;
                }
            }
        }
    }
}
</style>
