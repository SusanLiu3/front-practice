<template>
    <div class="right">
        我是 right 页面 
        <component :is="comPare[comName]"></component>
        <!-- <list></list>
        <chart></chart> -->
    </div>
</template>
<script>
import List from './right/List'
import Chart from './right/Chart'
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState('home',['comName'])
    },
    components:{
        List,
        Chart
    },
     data(){
        return {
            comPare:{
                0:List,
                1:Chart
            }
        }
    }
}
</script>