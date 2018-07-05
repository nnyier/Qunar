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
    height: 0.72rem;
    background: $bg-color;
    padding: 0 0.1rem;

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
