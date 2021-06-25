<!--
* @Author: lss
* @Change: 更改者
* @Date: 年-月-日
* @Description: 组件列表页面
-->
<template>
    <transition name="fade">
        <div class="com-list-wrap">
            <!--  -->
            <div class="com-list-title">
                <span>组件列表</span>
                <i class="el-icon-arrow-left" @click="setComListShowFlag"></i>
            </div>
            <div class="com-list-content">
                <ul class="tab-list">
                    <li
                        v-for="(i, idx) in tabList"
                        :key="i.name"
                        :class="idx === curSelectIndex ? 'active' : ''"
                        @click="curSelectIndex = idx"
                    >
                        <i :class="i.iconName"></i>
                    </li>
                </ul>
                <div class="tab-content">
                    <button class="add-btn" @click="uploadBoxShow = true">
                        +
                    </button>
                    <ul class="" v-if="list[curSelectIndex]">
                        <li
                            v-for="(item, idx) in list[curSelectIndex]"
                            :key="idx"
                            :title="item.name"
                        >
                            <img :src="item.url" />
                            <span>{{ item.name }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <upload
                v-if="uploadBoxShow"
                @close="uploadBoxShow = false"
                @sure="sure"
            ></upload>
        </div>
    </transition>
</template>

<script>
import Upload from "@components/Upload";
import { getData } from '../../../utils/index.js'
// import { mapState, mapMutations } from "vuex";
// import { get } from "@/api/server.js";
export default {
    name: "ComList",
    props: [],
    data() {
        return {
            tabList: [
                {
                    name: "1",
                    iconName: "el-icon-platform-eleme",
                },
                {
                    name: "2",
                    iconName: "el-icon-platform-eleme",
                },
            ],
            curComName: "",
            curSelectIndex: 0,
            // 数据
            list: [
                [
                    {
                        name: "我是左中右布局",
                        url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3880341262,3308316348&fm=26&gp=0.jpg",
                    },
                    {
                        name: "我是上下左右布局",
                        url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3880341262,3308316348&fm=26&gp=0.jpg",
                    },
                ],
                [
                    {
                        name: "我是组件1",
                        url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3880341262,3308316348&fm=26&gp=0.jpg",
                    },
                ],
            ],
            uploadBoxShow: false,
        };
    },
    components: {
        Upload,
    },
    computed: {
        // ...mapState("canvasEditor", ["comListShow"]),
    },
    watch: {},
    async created() {
        let res = await getData()
        console.log(res)
    },
    mounted() {

        // const res = await get("fetchComList");
        // console.log(res);
    },
    methods: {
        // ...mapMutations("canvasEditor", ["setComListShow"]),
        setComListShowFlag() {
            // this.setComListShow(!this.comListShow);
        },
        sure(msg) {
            this.list[this.curSelectIndex].push(
                {
                    name: msg,
                    url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3880341262,3308316348&fm=26&gp=0.jpg",
                },
            )
            this.uploadBoxShow = false
        }
    },
    destroyed() { },
};
</script>

<style lang="scss" scoped>
.com-list-wrap {
    width: 100%;
    height: 100%;
    .com-list-title {
        width: 100%;
        height: 32px;
        border: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px;
        i {
            width: 32px;
            line-height: 32px;
            font-size: 18px;
            cursor: pointer;
            text-align: right;
        }
    }
    .com-list-content {
        display: flex;
        width: 100%;
        height: calc(100% - 32px);
        .tab-list {
            width: 30%;
            height: 100%;
            border-right: 1px solid #dedede;
            padding-top: 20px;
            li {
                width: 100%;
                height: 36px;
                cursor: pointer;
                i {
                    display: inline-block;
                    font-size: 20px;
                    margin-top: 8px;
                }
            }
            li.active {
                background-color: rgba(0, 0, 0, 0.1);
            }
        }
        .tab-content {
            width: 70%;
            padding: 20px 15px 10px;
            .add-btn {
                width: 80%;
                cursor: pointer;
                height: 32px;
                border: none;
                font-size: 20px;
            }
            li {
                margin-top: 10px;
                img {
                    width: 100%;
                    height: 80px;
                }
                span {
                    width: 80px;
                    display: inline-block;
                    @include ellipsis;
                }
            }
        }
    }
}
// .fade-enter-active {
//     transform: translate(30px);
// }
// .fade-leave-active {
//     transform: translate(-30px);
// }
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
