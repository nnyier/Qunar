<template>
    <div class="recommend">
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "00001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg",
          title: "北京温泉排行榜",
          desc: "细数北京温泉，温暖你的冬天"
        },
        {
          id: "00002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg",
          title: "北京温泉排行榜",
          desc: "细数北京温泉，温暖你的冬天"
        },
        {
          id: "00003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg",
          title: "北京温泉排行榜",
          desc: "细数北京温泉，温暖你的冬天"
        },
        {
          id: "00004",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg",
          title: "北京温泉排行榜",
          desc: "细数北京温泉，温暖你的冬天"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../common/css/mixins.styl';

.title {
    height: 0.8rem;
    padding-left: 0.26rem;
    line-height: 0.8rem;
    color: #212121;
}

.item {
    .item-img-wrapper {
        height: 0;
        width: 100%;
        padding-bottom: 33.9%;
        overflow: hidden;

        .item-img {
            width: 100%;
        }
    }

    .item-info {
        padding: 0.1rem;

        .item-title {
            line-height: 0.48rem;
            font-size: 0.28rem;
            color: #212121;
            ellipsis();
        }

        .item-desc {
            line-height: 0.42rem;
            font-size: 0.24rem;
            padding-right: 1.4rem;
            color: #616161;
            ellipsis();
        }
    }
}
</style>
