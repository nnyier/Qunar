<template>
    <div class="header">
        <router-link to="/" tag="div" class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </router-link>
        <h1 class="title">城市选择</h1>
    </div>
</template>

<script>
export default {
  name: "CityHeader"
};
</script>

<style lang="stylus" scoped>
@import '../../../common/css/variables.styl';
@import '../../../common/css/mixins';

.header {
    height: $city-header-height;
    line-height: $city-header-height;
    border-bottom: 0;
    position: relative;
    background: $bg-color;
    z-index: 91;

    .header-left {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 0.36rem;
        color: #ffffff;
        text-align: center;
        width: 0.8rem;
        height: $city-header-height;
        line-height: $city-header-height;

        .back-icon {
            font-size: 0.4rem;
        }
    }

    .title {
        margin: 0 1rem;
        line-height: $city-header-height;
        font-size: 0.32rem;
        text-align: center;
        color: #fff;
        ellipsis();
    }
}
</style>
