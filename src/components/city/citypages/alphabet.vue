<template>
    <div>
        <ul class="list">
            <li class="item" v-for="item of letters" :ref="item" :key="item.id" @click="handleLetterClick" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{item}}</li>
        </ul>
    </div>

</template>

<script>
export default {
  name: "CityAlphabet",
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  props: {
    cities: Object
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
      //   ["A","B","C",..."Z"]}
    }
  },
  updated() {
    //   页面渲染完成之后会出发这个钩子
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
      //   console.log(e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        // 函数截流，手指移动时touchMove触发频率过高
        if (this.timer) {
          clearTimeout(this.timer);
        }
        // 每隔16ms执行一次
        this.timer = setTimeout(() => {
          //   A距离列表顶部的距离
          // const startY = this.$refs["A"][0].offsetTop;
          //   移动的位置距离页面顶部的距离
          const touchesY = e.touches[0].clientY;
          //  移动的位置距离列表顶部的距离
          const touchY = touchesY - 64;
          // 移动的位移
          const offset = touchY - this.startY;
          // 每一个字母的距离 行高20px
          const index = Math.floor(offset / 20);
          if (index >= 0 && index <= this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
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
        // 行高20px
        line-height: 0.4rem;
        text-align: center;
        color: $bg-color;
    }
}
</style>
