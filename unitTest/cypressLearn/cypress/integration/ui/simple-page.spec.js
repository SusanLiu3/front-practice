describe('simple page interaction', function () {
    it('test button click and show messageBox', function () {
        cy.visit('/canvasEditor').then(() => {
            cy.get('.tab-list>li:last-child').click()
            cy.get('.add-btn').click()
            cy.get('input[type="text"]').type('我是布局名称')
            cy.get('.btn-cancel').click()

        })
    })
})