<template>
    <div class="recommend">
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of weeklist" :key="item.id">
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
  props: {
    weeklist: Array
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
    background: #eee;
}

.item {
    .item-img-wrapper {
        height: 0;
        width: 100%;
        padding-bottom: 37.1%;
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
