import urlList from './datas/urlConfig'
describe('测试某个接口返回值是否正确', function () {
    urlList.forEach(ele => {
        let { desc, url, method, params } = ele
        it(desc, function () {
            cy.request({
                method,
                url,
                body: { ...params }
            }).then((res) => {
                cy.log(res)
                const { body } = res
                expect(body.code).to.equal(200)
            })
        })
    });
})