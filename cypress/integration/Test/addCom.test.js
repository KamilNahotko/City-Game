//<reference types="Cypress"/>\
const faker = require('faker');
faker.locale = 'pl';

const url='http://localhost:3000/home'

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
            cy.visit(url)
        })
    })
    context('Type City',()=>{
        city.map((item)=>{
            it('Type: ' + item.street,()=>{
                const street=faker.address.city()
                cy.get('#standard-basic').type(item.street)
                cy.get('.AddComment-formSection-36 > .MuiButtonBase-root').click()
                cy.get('.Game-root-29 > :nth-child(2) > .MuiList-root').should('contain',item.street)
            })
        })
    })
})