<template>
     <data-list :attrs="attrs" :list="listData" :headers="headers">
     </data-list>
</template>
<script>
import DataList from '@/DataList'
export default {
    components:{
        DataList
    },
    data() {
        return {
            headers: ['地铁线', '站点数', '开通里程'],
            attrs: ['lineName', 'sizeNum', 'miles'],
            listData: [
                {
                    lineName:'1号线',
                    sizeNum:2,
                    miles:12
                },
                {
                    lineName:'2号线',
                    sizeNum:2,
                    miles:12
                }
            ],
        };
    },
}
</script>