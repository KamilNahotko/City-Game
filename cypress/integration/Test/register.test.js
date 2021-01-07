const faker = require('faker');

const url='http://localhost:3000/'


describe('Main Page', () => {
    context('uruchomienie storny i sprawdzanie czy wszystko jest ok',()=>{
        it('City Game visit',()=>{
            cy.visit(url)
        })
    })
    context("Sprawdzenie czy sa inputy",()=>{
        it('Sprawdzanie czy sa inputy',()=>{
            cy.get(':nth-child(4) > .MuiButtonBase-root').click()
            cy.get('.Login-form-10').should('exist')
            cy.get('.MuiGrid-container > :nth-child(2) > .MuiTypography-root').click()
            cy.get('#nickname').should('exist')
            cy.get('#email').should('exist')
            cy.get('#password').should('exist')
            cy.get('#repeatPassword').should('exist')
            cy.get('.Register-form-22 > .MuiButtonBase-root').should('exist')
        })
    })
    context("Rejestrowanie",()=>{
        
        it('Wpisywanie',()=>{
            clearInput()
            cy.get('#nickname').type('tester');
            cy.get('#email').type('test@test.com');
            cy.get('#password').type('test123');
            cy.get('#repeatPassword').type('test123');
            cy.get('.Register-form-22 > .MuiButtonBase-root').click()
        })
    })
})
const clearInput = () =>
{
    cy.get('#nickname').type('{selectall}{del}')
    cy.get('#email').type('{selectall}{del}')
    cy.get('#password').type('{selectall}{del}')
    cy.get('#repeatPassword').type('{selectall}{del}')
}