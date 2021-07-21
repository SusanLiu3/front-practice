<!--
* @Author: liushanshan
* @Change: 更改者
* @Date: 2021年-4月-25日
* @Description: 数据列表
-->
<template>
    <div class="list-wrap">
        <!-- 遍历表头(固定) -->
        <div class="header-box flex">
            <div class="header-item" v-for="(i, idx) in headers" :key="idx">
                {{ i }}
            </div>
        </div>
        <!-- 遍历数据行 -->
        <div class="content-wrap">
            <div class="content-box">
                <div
                    class="data-line flex"
                    v-for="(item, idx) in list"
                    :key="'data-line' + idx"
                >
                    <div
                        :class="['data-item', 'data-item-' + p]"
                        v-for="(p, pIdx) in attrs"
                        :key="'data-item' + pIdx"
                    >
                        <!-- 插槽默认显示内容 -->
                        <slot :name="p" :item="item" :idx="idx">
                            {{ item[p] }}
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DataList',
    /**
     * headers:表头数组,eg ['姓名','年龄'...]
     * attrs:字段属性名字,eg ['name','age'...]
     * list:对象类数组,eg [{name:'李四',age:18}...]
     */
    props: {
        headers: {
            type: Array,
            default: () => [],
        },
        list: {
            type: Array,
            default: () => [],
        },
        attrs: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {};
    },
    components: {},
    computed: {},
    watch: {},
    created() { },
    mounted() { },
    methods: {},
    destroyed() { },
};
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
}
.list-wrap {
    width: 100%;
    height: 100%;
    color: #cfe9da;
    font-size: 14px;
    font-family: SourceHanSansCN-Normal, SourceHanSansCN;
    font-weight: 400;
    .flex {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .header-box {
        height: 30px;
        background: #254d51;
        opacity: 0.3;
        .header-item {
            flex: 1;
            padding: 7px;
            text-align: center;
        }
    }
    .content-wrap {
        width: 100%;
        height: calc(100% - 30px);
        overflow-y: auto;
        .content-box {
            width: 100%;
            .data-line {
                height: 32px;
                border-bottom: 1px solid #cfe9da;
                .data-item {
                    flex: 1;
                    padding: 7px;
                    text-align: center;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
        }
        &::-webkit-scrollbar {
            width: 0;
        }
    }
}
</style>
