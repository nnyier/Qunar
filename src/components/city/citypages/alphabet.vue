<template>
    <div>
        <ul class="list">
            <li class="item" v-for="(item,key) of cities" :key="item.id">{{key}}</li>
        </ul>
    </div>

</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../common/css/variables.styl';

.list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.28rem;
    right: 0;
    bottom: 0;
    width: 0.4rem;
    text-align: center;

    .item {
        line-height: 0.4rem;
        text-align: center;
        color: $bg-color;
    }
}
</style>
