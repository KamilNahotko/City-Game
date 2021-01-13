//<reference types="Cypress"/>\
const faker = require('faker');
faker.locale = 'pl';

const urlMain = 'http://localhost:3000/'
const urlHome = 'http://localhost:3000/home'

const city = [
    {street:"Akacjowa"},
    {street:'Na Leszczu '},
    {street:'Rumiankowa'},
    {street:'Mordechaja Anielewicza '},
    {street:'Tulipanów'},
]


describe('Add com', () => {
    context('uruchomienie storny',()=>{
        it('City Game visit',()=>{
            cy.visit(urlMain)
            cy.get(':nth-child(4) > .MuiButtonBase-root').click()
            cy.get('#email').type('tester@test.com')
            cy.get('#password').type('test123')
            cy.get('.Login-form-10 > .MuiButtonBase-root').click()
            cy.wait(10000)
            cy.url().should('eq', urlHome)
        })
    })
    context('Type City',()=>{
        city.map((item)=>{
            it('Type: ' + item.street,()=>{
                const street=faker.address.city()
                cy.get('#standard-basic').type(item.street)
                cy.get('.AddComment-formSection-55 > .MuiButtonBase-root').click()
                cy.get('.Game-root-48 > :nth-child(2) > .MuiList-root').should('contain',item.street)
            })
        })
    })
})