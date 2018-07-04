<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="iconlist.length">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="" srcset="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    iconlist: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      }
    };
  },
  computed: {
    //  处理页面展示的icon
    pages() {
      const pages = [];
      this.iconlist.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../common/css/variables.styl';
@import '../../../common/css/mixins.styl';

// 图片高宽比 1：2
// .icons>>>.swiper-pagination-bullet-active {
// background: green !important;
// }
.icons>>>.swiper-container {
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  overflow: hidden;
}

.icons {
  margin-top: 0.1rem;

  .icon {
    position: relative;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-img-content {
        height: 100%;
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: 0.44rem;
      height: 0.44rem;
      color: $dark-text-color;
      text-align: center;
      // ...省略
      ellipsis();
    }
  }
}
</style>
