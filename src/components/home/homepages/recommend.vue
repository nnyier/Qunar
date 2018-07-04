<template>
    <div class="recommend">
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [
        {
          id: "00001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_200x200_e7f0d0ad.jpg",
          title: "北京温泉排行榜",
          desc: "细数北京温泉，温暖你的冬天"
        },
        {
          id: "00002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_200x200_e7f0d0ad.jpg",
          title: "北京温泉排行榜",
          desc: "细数北京温泉，温暖你的冬天"
        },
        {
          id: "00003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_200x200_e7f0d0ad.jpg",
          title: "北京温泉排行榜",
          desc: "细数北京温泉，温暖你的冬天"
        },
        {
          id: "00004",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_200x200_e7f0d0ad.jpg",
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
    line-height: 0.8rem;
    background: #eeeeee;
    text-indent: 0.2rem;
    margin-top: 0.2rem;
}

.item {
    display: flex;
    height: 1.9rem;
    overflow: hidden;

    .item-img {
        width: 1.7rem;
        height: 1.7rem;
        padding: 0.1rem;
    }

    .item-info {
        flex: 1;
        padding: 0.1rem;
        min-width: 0;

        .item-title {
            line-height: 0.54rem;
            font-size: 0.32rem;
            ellipsis();
        }

        .item-desc {
            line-height: 0.4rem;
            color: #ccc;
            ellipsis();
        }

        .item-button {
            line-height: 0.44rem;
            background: #ff9300;
            padding: 0 0.2rem;
            border-radius: 0.06rem;
            margin-top: 0.16rem;
        }
    }
}
</style>
