describe('check marvel header', () => {
    it('check header title is marvel', () => {
        cy.visit('https://hemali91.github.io/marvel-web/')
        cy.get('#marvel_title').should('have.text', 'MARVEL');
    })

    it('should check correct url', () =>  {
        cy.url().should('include','hemali91.github.io')
    })
})

describe('browser actions', () => {
    it('should display correct number of images', () => {
        cy.get('.img_source').its('length').should('eq',12);
    })
})