<template>
    <div class="detail-banner">
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" alt="">
            <div class="banner-info">
                <div class="banner-title">{{this.bannerName}}</div>
                <div class="banner-number">
                    <i class="iconfont banner-icon">&#xe6f5;</i>{{this.bannerName}}
                </div>
            </div>
        </div>
        <common-gallary @close="handleGallaryClose" v-show="showGallary" :imgs="bannerImgs"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from "../../../base/gallary/gallary";
export default {
  name: "DetailBanner",
  props: {
    bannerName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data() {
    return {
      showGallary: false
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
