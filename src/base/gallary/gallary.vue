<template>
    <div class="gallary" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="gallary-img" :src="item" alt="">
                </swiper-slide>

                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
  name: "CommonGallary",
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        loop: true,
        autoplay: true,
        observer: true,
        observeParents: true
      }
    };
  },
  methods: {
    handleGallaryClick() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="stylus" scoped>
.gallary>>>.swiper-container {
    overflow: inherit;
}

.gallary {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: #000;
    z-index: 3;

    .wrapper {
        // overflow: hidden;
        height: 0;
        width: 100%;
        padding-bottom: 100%;
        background: #fff;

        .swiper-pagination {
            bottom: -1rem;
        }

        .swiper-pagination-fraction {
            color: #fff;
        }

        .gallary-img {
            width: 100%;
        }
    }
}
</style>
