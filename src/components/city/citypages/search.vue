<template>
    <div class="search">
        <div class="city-search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
        </div>
        <div class="search-content" v-show="keyword" ref="searchContent">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配项</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      //   输入框内容为空时，清除list
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setInterval(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.searchContent);
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../common/css/variables.styl';

.search {
    .city-search {
        padding: 0 0.1rem;
        height: 0.62rem;
        background: $bg-color;
        width: 100%;
        box-sizing: border-box;

        .search-input {
            box-sizing: border-box;
            height: 0.52rem;
            line-height: 0.52rem;
            width: 100%;
            text-align: center;
            border-radius: 0.06rem;
            padding: 0 0.1rem;
            font-size: 0.2rem;
            color: #666;
        }
    }

    .search-content {
        z-index: 1;
        position: absolute;
        top: 1.88rem;
        left: 0;
        right: 0;
        bottom: 0;
        background: #eee;
        overflow: hidden;

        .search-item {
            line-height: 0.62rem;
            padding-left: 0.2rem;
            color: #666;
            background: #fff;
        }
    }
}
</style>
