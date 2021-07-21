<template>
    <div class="home">
        <left @myClick="myClkProcess"></left>
        <div id="div3d"></div>
        <right></right>
        <ul class="nav">
            <li v-for="(i, idx) in tabs" :key="idx" @click="clkProcess(idx)">
                {{ i }}
            </li>
        </ul>
    </div>
</template>
<script>
import left from './left'
import right from './right'
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            active: '',
            tabs: ['首页', '详情'],
            app: null
        }
    },
    components: {
        left,
        right
    },
    mounted() {
        // eslint-disable-next-line
        this.app = new THING.App({
            container: 'div3d',
            url: 'https://www.thingjs.com/static/models/storehouse',
            // url: './campus', 
            // loaderResourceUrl: 'http://10.209.1.230:8806/StaticFile/SceneFiles/1601342989833e6770523965/' || '', // 加载本地模型资源
            skyBox: './Night',
        });
    },
    methods: {
        ...mapMutations('home', ['setComName']),
        clkProcess(idx) {
            this.setComName(idx)
        },
        myClkProcess() {
            let box = this.app.create({
                type: 'Box',
                width: 4,
                height: 4,
                depth: 4,
                position: [0, 2, 6],// 世界坐标系下的位置
                style: {
                    color: '#ff4455',
                }
            })
        }
    }
}
</script>
<style scoped lang='scss'>
.home {
    position: relative;
    display: flex;
}
.left {
    width: 20%;
    height: 100%;
}
.right {
    width: 20%;
    height: 100%;
}
#div3d {
    width: 60%;
    height: 100%;
}
.nav {
    position: absolute;
    top: 50%;
    right: 20%;
    /* width: 10%; */
    transform: translateY(-50%);
    color: #fff;
    list-style: none;
    li {
        padding: 10px;
        cursor: pointer;
    }
    li.active {
        color: #f45;
    }
}
</style>