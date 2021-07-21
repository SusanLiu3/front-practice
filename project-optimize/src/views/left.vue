<template>
    <div class="left">
        <component :is="comPare[comName]" v-on="$listeners"></component>
        <!-- <jsx></jsx> -->
    </div>
</template>
<script>
import jsx from './left/jsx'
import test from "./left/test";
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState('home',['comName'])
    },
    components:{
        jsx
    },
    data(){
        return {
            comPare:{
                0:jsx,
                1:test
            }
        }
    }
}
</script>