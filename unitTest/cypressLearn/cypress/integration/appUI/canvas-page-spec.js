
describe('simple page interaction', function () {

    it('test button click and show messageBox', function () {
        cy.visit('/#/canvasEditor').then(() => {
            cy.get('.tab-list>li:last-child').click()
            cy.get('.add-btn').click()
            cy.get('input[type="text"]').type('我是布局名称')
            cy.server()
            cy.route('POST', 'https://jsonplaceholder.typicode.com/posts/', 200).as('upload')
            cy.get('.el-upload__input').attachFile('1.jpg')
            cy.wait('@upload').then(() => {
                cy.get('.btn-sure').click()
            })

        })

    })
})