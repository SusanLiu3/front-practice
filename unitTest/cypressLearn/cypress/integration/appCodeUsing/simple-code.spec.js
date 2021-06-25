import {
    createBox,
    createMarker, createScene
} from '../../../src/utils/index'
describe('create object in 3d', function () {
    it('创建Box', function () {
        cy.visit('/#/3d').then(() => {
            cy.window().then(win => {
                cy.wait(10000).then(() => {
                    window.THING = win.THING
                    window.app = win.app
                    window.campus = window.campus || win.campus
                    createBox(win)
                })
            })
        })
       
    })

    it('创建Marker', function () {
        cy.window().then(win => {
            cy.wait(10000).then(() => {
                window.THING = win.THING
                window.app = win.app
                window.campus = window.campus || win.campus
                createMarker(win)
            })
        })
    })
})