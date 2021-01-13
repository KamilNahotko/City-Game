const faker = require('faker');

const urlMain = 'http://localhost:3000/'
const urlHome = 'http://localhost:3000/home'

const pass = [
    {email: faker.internet.email(), password:faker.internet.password()},
    {email: faker.internet.email(), password:faker.internet.password()},
    {email: faker.internet.email(), password:faker.internet.password()},
    {email: faker.internet.email(), password:faker.internet.password()},
    {email: 'tester@test.com', password:'test123'},
]


describe('Login', () => {
    context('uruchomienie storny i sprawdzanie czy wszystko jest ok',()=>{
        it('City Game visit',()=>{
            cy.visit(urlMain)
        })
    })
    context("Sprawdzenie czy sa inputy",()=>{
        it('Sprawdzanie czy sa inputy',()=>{
            cy.get(':nth-child(4) > .MuiButtonBase-root').click()
        })
    })
    context("logowanie",()=>{
        
        pass.map((item)=>{
            it('Wpisywanie',()=>{
                clearInput()
                cy.get('#email').type(item.email)
                cy.get('#password').type(item.password)
                cy.get('.Login-form-10 > .MuiButtonBase-root').click()
                cy.wait(10000)
                cy.url().should('eq', urlHome)
                cy.visit(urlMain)
            })
        })
    })
})
const clearInput = () =>
{
    cy.get('#email').type('{selectall}{del}')
    cy.get('#password').type('{selectall}{del}')
}