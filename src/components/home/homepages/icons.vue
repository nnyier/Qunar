<template>
    <div class="icons">
        <swiper :options="swiperOption">
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
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        autoplay: true
      },
      iconList: [
        {
          id: "2001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: "2002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          desc: "一日游"
        },
        {
          id: "2003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc: "必游榜单"
        },
        {
          id: "2004",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
          desc: "动植物园"
        },
        {
          id: "2005",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",
          desc: "夏日玩水"
        },
        {
          id: "2006",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1805/57/1e29afd06f881102.png",
          desc: "普陀山"
        },
        {
          id: "2007",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png",
          desc: "上海欢乐谷"
        },
        {
          id: "2008",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png",
          desc: "精选"
        },
        {
          id: "2009",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png",
          desc: "上海迪士尼"
        },
        {
          id: "20010",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png",
          desc: "全部玩乐"
        }
      ]
    };
  },
  computed: {
    //  处理页面展示的icon
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
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
</style>
