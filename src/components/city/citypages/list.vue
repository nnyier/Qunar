<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <!-- <div class="title">搜索</div> -->
                <!-- <city-search></city-search> -->
                <!-- <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button active">上海</div>
                    </div>
                </div> -->
            </div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button active">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" @click="handleCityClick(item.name)" v-for="item of hot" :key="item.id">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key) of cities" :key="item.id" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
// import CitySearch from "./search";
export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    //   将vuex的公用属性city映射到组件的计算属性里
    ...mapState({
      currentCity: "city"
    })
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {});
    });
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city);
      //   this.$store.dispatch("changeCity", city);
      //   选择城市后跳转至首页
      this.$router.push("/");
    },
    // 将mutations里的changeCity映射到组件里的changeCity方法里
    // this.$store.dispatch("changeCity", city) = this.changeCity(city)
    ...mapMutations(["changeCity"])
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        // console.log(element);
        this.scroll.scrollToElement(element);
      }
      //   console.log(this.letter);
    }
  },
  components: {
    // CitySearch
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../common/css/variables.styl';

.border-topbottom {
    &:before {
        border-color: #ccc;
    }
}

.border-topbottom {
    &:after {
        border-color: #ccc;
    }
}

.border-bottom {
    &:before {
        border-color: #ccc;
    }
}

.list {
    position: absolute;
    top: 1.9rem;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;

    .title {
        line-height: 0.54rem;
        background: #eeeeee;
        padding-left: 0.2rem;
        color: #666;
        font-size: 0.26rem;
    }

    .button-list {
        padding: 0.1rem 0.6rem 0.1rem 0.1rem;
        overflow: hidden;

        .button-wrapper {
            width: 33.33%;
            float: left;

            .button {
                text-align: center;
                margin: 0.1rem;
                border: 0.02rem solid #ccc;
                padding: 0.1rem 0;
                border-radius: 0.06rem;
            }

            .active {
                background: #00bcd4;
                color: #fff;
            }
        }
    }

    .item-list {
        .item {
            line-height: 0.76rem;
            padding-left: 0.2rem;
        }
    }
}
</style>
