//<reference types="Cypress"/>
const faker = require('faker');

const url='http://localhost:3000/'

const pass = [
    {email: faker.internet.email(),password:faker.internet.password()},
    {email: faker.internet.email(),password:faker.internet.password()},
]
const inputName = [
    {name:'#email'},
    {name:"#password"},
]

describe('Main Page', () => {
    context('uruchomienie storny i sprawdzanie czy wszystko jest ok',()=>{
        it('City Game visit',()=>{
            cy.visit(url)
        })
        it('Sprawdzanie czy sa inputy',()=>{
            cy.get(':nth-child(4) > .MuiButtonBase-root').click()
            cy.get('.Login-form-10').should('exist')
            cy.get('#email').should('exist')
            cy.get('#password').should('exist')
            cy.get('.Login-form-10 > .MuiButtonBase-root').should('exist').and('have.text','Zaloguj')
        })
    })
    context('testowanie logowania',()=>
    {
        pass.map((item)=>{
            it('login: ' + item.email, () => {
                cy.get(':nth-child(4) > .MuiButtonBase-root').click()
                clearInput(inputName)
                typePass(item)
                cy.get('.Login-form-10 > .MuiButtonBase-root').click()
            })
        })
    })
})

const typePass = (item) =>
{
    cy.get('#email').type(item.email);
    cy.get('#password').type(item.password);
}

const clearInput = (items) =>
{
    items.map((item)=>{
        cy.get(item.name).type('{selectall}{del}');
    })
}