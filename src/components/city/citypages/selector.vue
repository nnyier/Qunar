<template>
    <div class="city-selector">
        <ul class="selector">
            <router-link to="/city/inhome" tag="li">境内</router-link>
            <router-link to="/city/outhome" tag="li">境外</router-link>
        </ul>
    </div>
</template>

<script>
export default {
  name: "CitySelector"
};
</script>

<style lang="stylus" scoped>
@import '../../../common/css/variables.styl';
@import '../../../common/css/mixins';

.city-selector {
    height: 0.4rem;
    line-height: 0.4rem;
    background-color: #00bcd4;
    padding: 0 1rem 0.2rem 1rem;
    color: #fff;

    .selector {
        border: 1px solid #fff;
        border-radius: 0.03rem;
        zoom: 1;
        overflow: hidden;

        li {
            width: 50%;
            float: left;
            text-align: center;
            background-color: #00bcd4;
            font-size: 0.28rem;
            color: #fff;
        }

        li.router-link-exact-active, li.router-link-active {
            color: $bg-color;
            background: #fff;
        }
    }
}
</style>
