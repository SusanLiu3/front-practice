describe('登录测试', function () {
    const user = 'lss';
    const password = '123456'

    it('登录成功，跳转到canvasEditor', function () {
        cy.visit('').then(() => {
            cy.get('.el-user').type(user)
            cy.get('.el-password').type(password)
            cy.get('.el-button').click()
            cy.get('.tab-list>li:last-child').click()
            cy.get('.add-btn').click()
            cy.url().should('include', '/canvasEditor')
        })
    })
    

    it('登录失败,停留在当前页面', function () {
        cy.visit('').then(() => {
            cy.get('.el-user').type('ldd')
            cy.get('.el-password').type(password)
            cy.get('.el-button').click()
            cy.get('.tab-list>li:last-child').click()
            cy.get('.add-btn').click()
            cy.url().should('include', '/canvasEditor')
        })
    })
})