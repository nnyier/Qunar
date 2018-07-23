<template>
    <div class="home-header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <i class="iconfont">&#xe632;</i>输入城市/景点/游玩主题</div>
        <router-link to="/city" tag="div" class="header-right">{{this.currentCity}}
            <i class="iconfont arrow-down-icon">&#xe623;</i>
        </router-link>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeHeader",
  props: {
    city: String
  },
  computed: {
    //   将state的city映射到组件  即this.$store.state.city = this.currentCity
    ...mapState({
      currentCity: "city"
    })
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../common/css/variables.styl';

// 1rem = html font-size 50px(2倍图)
.home-header {
    background: $bg-color;
    line-height: $header-height;
    display: flex;
    color: #fff;

    .header-left {
        height: 0.64rem;
        float: left;

        .back-icon {
            font-size: 0.4rem;
        }
    }

    .header-input {
        flex: 1;
        background: #fff;
        border-radius: 0.1rem;
        margin-top: 0.12rem;
        margin-left: 0.2rem;
        padding-left: 0.4rem;
        height: 0.64rem;
        line-height: 0.64rem;
        color: #ccc;
    }

    .header-right {
        min-width: 1.04rem;
        padding: 0 0.1rem;
        float: right;
        text-align: center;

        .arrow-down-icon {
            margin-left: -0.1rem;
            font-size: 0.4rem;
            line-height: 0.64rem;
        }
    }
}
</style>
