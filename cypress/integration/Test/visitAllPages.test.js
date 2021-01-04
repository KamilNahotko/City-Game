//<reference types="Cypress"/>


const urlMain           = 'http://localhost:3000/'
const urlHome           = 'http://localhost:3000/home'
const urlUserPage       = "http://localhost:3000/user-page"
const urlUserSettings   = "http://localhost:3000/user-settings"


describe('Add com', () => {
    context('Chodzenie po stronach',()=>{
        typeUrl(urlMain);
        typeUrl(urlHome);
        typeUrl(urlUserPage);
        typeUrl(urlUserSettings);
    })
})

function typeUrl(url) {
    it('Visit: ' + url, ()=>{
        cy.visit(url)
        cy.url().should('eq', url)
    })
    
}