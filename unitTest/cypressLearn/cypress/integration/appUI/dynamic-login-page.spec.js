
import { testLoginUser } from './datas/login'
describe('登录测试', function () {

    beforeEach(function () {
        cy.visit('')
    })

    testLoginUser.forEach(item => {
        const { user, password, desc } = item
        it(desc, () => {
            cy.get('.el-user').type(user)
            cy.get('.el-password').type(password)
            cy.get('.el-button').click()
            cy.get('.tab-list>li:last-child').click()
            cy.get('.add-btn').click()
            cy.url().should('include', '/canvasEditor')
        })

    });
})