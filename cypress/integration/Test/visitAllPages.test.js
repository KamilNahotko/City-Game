//<reference types="Cypress"/>


const urlMain           = 'http://localhost:3000/'
const urlHome           = 'http://localhost:3000/home'
const urlUserPage       = "http://localhost:3000/user-page"
const urlUserSettings   = "http://localhost:3000/user-settings"


describe('Add com', () => {
    context('logowanie i wchodzenie',()=>{
        it('do it',()=>{
            cy.visit(urlMain)
            cy.get(':nth-child(4) > .MuiButtonBase-root').click()
            cy.get('#email').type('tester@test.com')
            cy.get('#password').type('test123')
            cy.get('.Login-form-10 > .MuiButtonBase-root').click()
            cy.wait(10000)
            cy.url().should('eq', urlHome)
            cy.get('.MuiToolbar-root > div > .MuiButtonBase-root').click()
            cy.get('[tabindex="0"] > .MuiButtonBase-root').click()
            cy.url().should('eq', urlUserPage)
            cy.get('.makeStyles-styledLink-65 > .MuiButtonBase-root').click()
            cy.url().should('eq',urlUserSettings)
            cy.get('#password').should('exist')
            cy.get('#password').should('exist')
        })
    })
})
