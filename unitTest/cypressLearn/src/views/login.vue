<!--
* @Author: 开发者
* @Change: 更改者
* @Date: 年-月-日
* @Description: 功能描述
-->
<template>
    <div class="login-wrap">
        <div>
            <span>用户名:</span
            ><el-input
                class="el-user"
                v-model="user"
                placeholder="请输入内容"
            ></el-input>
        </div>
        <div>
            <span>密码:</span
            ><el-input
                class="el-password"
                placeholder="请输入密码"
                v-model="password"
                show-password
            ></el-input>
        </div>
        <el-button class="el-button" @click="login">登录</el-button>
    </div>
</template>

<script>
export default {
    name: '',
    props: [],
    data() {
        return {
            user: '',
            password: ''
        };
    },
    components: {},
    computed: {},
    watch: {},
    created() { },
    mounted() { },
    methods: {
        login() {
            if (this.user === 'lss' && this.password === '123456') {
                this.$router.push({
                    path: '/canvasEditor'
                })
            } else {
                this.$message({
                    message: '请输入正确的用户名密码',
                    type: 'warning'
                });
            }
        }
    },
    destroyed() { },
};
</script>

<style lang="scss" scoped>
</style>
