
<template>
    <!-- 代码冗余， -->
    <div>
        我是 left1页面 
        <img-render type="alarm"></img-render>
        <svg-render class="svg-icon" type="alarmIcon"></svg-render>
        <button @click="clkProcess">我是按钮</button>
    </div>
</template>
<script>
export default {
    components: {
        imgRender: {
            render() {
                return <img src={this.imgList[this.type]}  onClick={this.clk}/>
            },
            props: ['type'],
            data() {
                return {
                    imgList: {
                        alarm: require('../../assets/infoPanel/infoPanel_alarm@1x.png'),
                        monitor: require('../../assets/infoPanel/infoPanel_monitor@1x.png'),
                    }
                }
            },
            methods:{
                clk(){
                    console.log('♥♥♥♥♥♥')
                }
            }
        },
        svgRender: {
            render() {
                return <svg-icon iconName={this.type} class='test-svg'> </svg-icon>
            },
            props: ['type'],
        }
    },
    methods:{
        clkProcess(){
            this.$emit('myClick')
        }
    }
}
</script>
<style scoped>
.test-svg{
    width: 32px;
    height: 32px;
    cursor: pointer;
}
</style>