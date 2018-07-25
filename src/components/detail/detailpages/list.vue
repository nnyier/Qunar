<template>
    <div class="detail-list">
        <div class="item" v-for="item in list" :key="item.id">
            <div class="item-title">
                <span class="item-title-icon"></span>{{item.title}}
            </div>
            <!-- 递归组件  二级循环 -->
            <div class="item-children" v-if="item.children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "DetailList",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
.detail-list {
    .item {
        position: relative;

        .item-title {
            overflow: hidden;
            position: relative;
            z-index: 2;
            margin-bottom: -0.02rem;
            padding: 0 0.2rem;
            height: 0.88rem;
            background: #fff;
            color: #333;
            font-size: 0.32rem;
            line-height: 0.88rem;
            text-indent: 0.4rem;

            .item-title-icon {
                display: inline-block;
                position: absolute;
                width: 0.36rem;
                height: 0.36rem;
                top: 0.26rem;
                left: 0.2rem;
                background: url('//s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat;
                margin-right: 0.1rem;
                background-size: 0.4rem 3rem;
            }
        }

        .item-children {
            padding: 0 0.3rem;
        }
    }
}
</style>
