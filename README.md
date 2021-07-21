# front-practice

[jest参考文档](https://www.yuque.com/sunluyong/node/gq5qaa#L9xkp)
[cypress](https://www.zhihu.com/column/testertalk)
[cypress 详解](https://www.cnblogs.com/poloyy/tag/Cypress/default.html?page=5)
[cypress 详解2](https://www.cnblogs.com/Yellow-ice/p/14851186.html)
[cypress 测试覆盖率](https://www.pangjian.me/2020/02/28/e2e-test-cypress-code-coverage/?hmsr=toutiao.io&utm_campaign=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)

###
1. 开始一个初始状态，如登录一个页面或者查询一个元素
2. 和元素进行交互
3. 断言 --  预期结果和真实结果比较

```
 // "reporterOptions": {
    //     "mochaFile": "results/test-[hash].xml", 
    //     "toConsole": true 
    // },
```
- npx nyc report

- npx nyc report --reporter=text-summary

- OpenSSL SSL_connect: Connection was reset in connection to github.com:443
  - git config --global --unset https.proxy