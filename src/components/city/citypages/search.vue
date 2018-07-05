<template>
    <div class="city-search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {
  name: "CitySearch"
};
</script>

<style lang="stylus" scoped>
@import '../../../common/css/variables.styl';

.city-search {
    padding 0 0.2rem
    position: absolute;
    top: 1.48rem;
    left: 0;
    height: 0.72rem;
    background: $bg-color;
    width: 100%;
    box-sizing: border-box;

    .search-input {
        box-sizing: border-box;
        height: 0.62rem;
        line-height: 0.62rem;
        width: 100%;
        text-align: center;
        border-radius: 0.06rem;
        padding: 0 0.1rem;
        font-size: 0.2rem;
        color: #666;
    }
}
</style>
