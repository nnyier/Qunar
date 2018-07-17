<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button active">上海</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">上海</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">三亚</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">杭州</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">广州</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">成都</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">西安</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">厦门</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">苏州</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">深圳</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">桂林</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">安徽</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">B</div>
                <div class="item-list">
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "CityList",
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {});
    });
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
    top: 1.28rem;
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
