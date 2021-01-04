//<reference types="Cypress"/>

const count = [
    {name:'1'},
    {name:'1'},
    {name:'1'},
    {name:'1'},
    {name:'1'},
    {name:'1'},
]
describe('ITS CLICKING TIME', () => {
    context('uruchomienie storny',()=>{
        it('City Game visit',()=>{
            cy.visit('http://localhost:3000/')
        })
    })
    context('testowanie logowania',()=>
    {
        it('clicking', () => {
            count.map(item=>{
                cy.get(':nth-child(4) > .MuiButtonBase-root').click()
                cy.get('.MuiButton-text > .MuiButton-label').click()
            })
        })
    })
})