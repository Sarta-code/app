<template>
  <div class="type-nav">
    <div class="container">
      <!-- 事件委托给父亲 -->
      <div @mouseleave="leaveShow"
           @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <transition name="animate__animated animate__bounce"
                    enter-active-class="animate__flipInY"
                    leave-active-class="animate__flipOutY">
          <div class="sort"
               v-show="isShow">
            <div class="all-sort-list2 "
                 v-on:click="goSearch">
              <div class="item"
                   v-for="(c1,index) of categoryList"
                   :key="c1.categoryId"
                   @mouseenter="ChangeItemBgc(index) "
                   :class="{focal:itemindex==index}">
                <h3>
                  <a :data-categoryName="c1.categoryName"
                     :data-category1Id="c1.categoryId">{{c1.categoryName}}</a>
                </h3>
                <div class="item-list clearfix"
                     :style="{display:itemindex==index?'block':'none'}">
                  <div class="subitem"
                       v-for="c2 of c1.categoryChild"
                       :key="c2.categoryId">
                    <dl class="fore">
                      <dt>
                        <a :data-categoryName="c2.categoryName"
                           :data-category2Id="c2.categoryId">{{c2.categoryName}}</a>
                      </dt>
                      <dd>
                        <em v-for="c3 of c2.categoryChild"
                            :key="c3.categoryId">
                          <a :data-categoryName="c3.categoryName"
                             :data-category3Id="c3.categoryId">{{c3.categoryName}}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
// 引入辅助函数mapState
import { mapState } from 'vuex';

// 引入animate.css动画
import 'animate.css';
//按需引入lodash的throttle功能
import throttle from 'lodash/throttle';
export default {
    name: 'TypeNav',
    data() {
        return {
            itemindex: -1,
            isShow: false,
        };
    },

    computed: {
        // 将辅助函数映射到计算属性上
        ...mapState({
            categoryList: state => {
                return state.home.categoryList;
            },
        }),
    },
    mounted() {
        if (this.$route.path == '/home') {
            this.isShow = !this.isShow;
        }
    },
    methods: {
        ChangeItemBgc: throttle(function (index) {
            this.itemindex = index;
        }, 20),
        leaveShow() {
            this.itemindex = -1;
            if (this.$route.path != '/home') {
                this.isShow = !this.isShow;
            }
        },
        enterShow() {
            if (this.$route.path != '/home') {
                this.isShow = !this.isShow;
            }
        },
        goSearch(event) {
            const element = event.target;

            // dataset属性可以拿到当前元素身上的自定义属性和值
            // 这里用对象的解构赋值拿到dataset身上的对象
            const { categoryname, category1id, category2id, category3id } = element.dataset;

            // 准备两个路由push配置项
            const location = { name: 'search' };
            const query = { categoryName: categoryname };

            if (category1id) {
                query.category1Id = category1id;
            } else if (category2id) {
                query.category2Id = category2id;
            } else if (category3id) {
                query.category3Id = category3id;
            }

            // 判断是否有params参数，如果有不丢弃带过去
            if (this.$route.params) {
                location.params = this.$route.params;
            }
            location.query = query;
            this.$router.push(location);
        },
    },
};
</script>

<style scoped lang="less">
.type-nav {
    border-bottom: 2px solid #e1251b;

    .container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        position: relative;

        .all {
            width: 210px;
            height: 45px;
            background-color: #e1251b;
            line-height: 45px;
            text-align: center;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
        }

        .nav {
            a {
                height: 45px;
                margin: 0 22px;
                line-height: 45px;
                font-size: 16px;
                color: #333;
            }
        }

        .sort {
            position: absolute;
            left: 0;
            top: 45px;
            width: 210px;
            height: 461px;
            position: absolute;
            background: #fafafa;
            z-index: 999;

            .all-sort-list2 {
                .item {
                    h3 {
                        line-height: 30px;
                        font-size: 14px;
                        font-weight: 400;
                        overflow: hidden;
                        padding: 0 20px;
                        margin: 0;

                        a {
                            color: #333;
                        }
                    }

                    .item-list {
                        display: none;
                        position: absolute;
                        width: 734px;
                        min-height: 460px;
                        background: #f7f7f7;
                        left: 210px;
                        border: 1px solid #ddd;
                        top: 0;
                        z-index: 9999 !important;

                        .subitem {
                            float: left;
                            width: 650px;
                            padding: 0 4px 0 8px;

                            dl {
                                border-top: 1px solid #eee;
                                padding: 6px 0;
                                overflow: hidden;
                                zoom: 1;

                                &.fore {
                                    border-top: 0;
                                }

                                dt {
                                    float: left;
                                    width: 54px;
                                    line-height: 22px;
                                    text-align: right;
                                    padding: 3px 6px 0 0;
                                    font-weight: 700;
                                }

                                dd {
                                    float: left;
                                    width: 415px;
                                    padding: 3px 0 0;
                                    overflow: hidden;

                                    em {
                                        float: left;
                                        height: 14px;
                                        line-height: 14px;
                                        padding: 0 8px;
                                        margin-top: 5px;
                                        border-left: 1px solid #ccc;
                                    }
                                }
                            }
                        }
                    }
                }
                .focal {
                    background-color: #e1251b;
                }
            }
        }
    }
}
</style>
