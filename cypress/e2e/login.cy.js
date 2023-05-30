describe("Verify Login with valid and invalid credentials", () => {
    it("should not login with invalid signin useres", () => {
        cy.visit("https://next-realworld.vercel.app/user/login")
        
        cy.get(':nth-child(1) > .form-control').type('email0123@gmail.com')
        cy.get(':nth-child(2) > .form-control').type('passwodfddrd')
        cy.get('.btn').click()
        cy.contains('email or password is invalid')
        
    })

    it("should login with valid signin useres", () => {
        cy.visit("https://next-realworld.vercel.app/user/login")
        
        cy.get(':nth-child(1) > .form-control').type('email0123@gmail.com')
        cy.get(':nth-child(2) > .form-control').type('password')
        cy.get('.btn').click()
        cy.contains('email1230')
        
    })

    it("should validate with empty email", () => {
        cy.visit("https://next-realworld.vercel.app/user/login")
        
        cy.get(':nth-child(1) > .form-control') 
        cy.get(':nth-child(2) > .form-control').type('password')
        cy.get('.btn').click()
        cy.contains('email can\'t be blank')
        
    })

    it("should validate with empty password", () => {
        cy.visit("https://next-realworld.vercel.app/user/login")
        
        cy.get(':nth-child(1) > .form-control').type('email0123@gmail.com')
        cy.get(':nth-child(2) > .form-control')
        cy.get('.btn').click()
        cy.contains('password can\'t be blank')
        
    })

    it("should redirect to register page when clicking 'Need an account' link", () => {
        cy.visit("https://next-realworld.vercel.app/user/login")
        cy.contains('Need an account?').click()
        cy.url().should('include', '/user/register')
    })



})