export default [
    {
        url: 'http://10.209.1.230:8806/login',
        methods: 'post',
        params: {
            code: "W41S",
            password: "admin123",
            username: "admin",
            uuid: "74b70260857a4635842b9364e1f2c10f",
        },
        desc: '登录接口测试'
    },
    {
        method: 'get',
        url: 'http://10.209.1.230:8806/alarm/trends',
        desc:'get接口请求单测s'
    }
]