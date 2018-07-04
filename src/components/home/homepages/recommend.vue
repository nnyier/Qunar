<template>
    <div class="recommend">
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recolist" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <p class="item-price">
                        <span class="item-color">￥</span>
                        <strong class="item-color">{{item.price}}</strong>起</p>
                </div>
            </li>
        </ul>
        <a class="more" href="#">查看所有产品</a>
    </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recolist: Array
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
            height: 0.44rem;
            color: #212121;
            font-size: 0.32rem;
            line-height: 0.44rem;
            ellipsis();
        }

        .item-desc {
            margin-top: 0.14rem;
            color: #616161;
            font-size: 0.24rem;
            line-height: 0.34rem;
            text-indent: 0.1rem;
            ellipsis();
        }

        .item-price {
            font-size: 0.24rem;
            margin-top: 0.3rem;

            strong {
                font-size: 0.4rem;
            }

            .item-color {
                color: #ff8300;
            }
        }
    }
}

.more {
    display: block;
    padding: 0.2rem 0;
    color: #00afc7;
    font-size: 0.28rem;
    line-height: 0.4rem;
    text-align: center;
}
</style>
