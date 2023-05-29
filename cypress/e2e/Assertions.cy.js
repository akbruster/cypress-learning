describe("Assertions deml", () => {
    it("Implicit assertions", () => {
        cy.visit("https://next-realworld.vercel.app/user/login")
        
        //should and
        // cy.url().should('include', 'vercel.app')
        // cy.url().should('eq', 'https://next-realworld.vercel.app/user/login')
        // cy.url().should('contains', 'next-realworld')


        // cy.url().should('include', 'vercel.app')
        // .should('eq', 'https://next-realworld.vercel.app/user/login')
        // .should('contains', 'next-realworld')
        
        cy.url().should('include', 'vercel.app')
        .and('eq', 'https://next-realworld.vercel.app/user/login')
        .and('contains', 'next-realworld').and('not.contain', 'bad')
        
        
    })
})