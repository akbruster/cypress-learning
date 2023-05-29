describe('template spec', () => {

  it('fail', () => {
    cy.visit('https://next-realworld.vercel.app/user/login')
    // cy.title().should('eq', 'NEXT REALOWORLD')
    cy.get(':nth-child(1) > .form-control').type("email0123@gmail.com")
    cy.get(':nth-child(2) > .form-control').type("password")
    cy.get('.btn').click()

    // cy.get('.container > .nav > :nth-child(2) > .nav-link').click()
    cy.contains('New Post').click()

    cy.xpath('//input[@placeholder="Article Title"][1]').type('NewTitle1221899212')
    cy.xpath('//input[@placeholder="What\'s this article about?"][1]').type('New title 12212878712')
    cy.xpath('//textarea[@placeholder="Write your article (in markdown)"][1]').type('This is new title 12212878712!!')
    cy.xpath('//input[@placeholder="Enter tags"][1]').type('tagtitle1')
    //cy.xpath('//button[normalize-space()="Publish Article"]').click()
    cy.xpath('//button[normalize-space()="Publish Article"][1]').click().click()
    //cy.get('.btn').click('bottom')
    // cy.xpath('//button[normalize-space()="Publish Article"][1]').click()

    cy.get(':nth-child(2) > .preview-link > h1').click()
    cy.get('.form-control').type('hello123')
    cy.get('.card-footer > .btn').click()



  })

  // it('pass', () => {
  //   cy.visit('https://next-realworld.vercel.app/user/login')
  //   cy.title().should('eq', 'LOGIN | NEXT REALWORLD')
  // })



})