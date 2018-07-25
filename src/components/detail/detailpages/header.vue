<template>
    <div class="detail-header">
        <router-link to="/" tag="div" class="header-abs" v-show="showAbs">
            <i class="iconfont header-abs-back">&#xe624;</i>
        </router-link>
        <div class="header-fixed" :style="opacityStyle" v-show="!showAbs">
            <router-link to="/" tag="div" class="header-left">
                <div class="iconfont back-icon">&#xe624;</div>
            </router-link>
            <h1 class="title">景点详情</h1>
        </div>
    </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  activated() {
    //   全局对象绑定的事件
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    //   解除全局对象绑定的事件
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // 渐隐渐现
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = {
          opacity
        };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../common/css/variables.styl';
@import '../../../common/css/mixins';

.detail-header {
    .header-abs {
        position: absolute;
        left: 0.2rem;
        top: 0.2rem;
        width: 0.8rem;
        height: 0.8rem;
        line-height: 0.8rem;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.8);
        text-align: center;

        .header-abs-back {
            color: #fff;
            font-size: 0.4rem;
        }
    }

    .header-fixed {
        height: $city-header-height;
        line-height: $city-header-height;
        border-bottom: 0;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
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
}
</style>
