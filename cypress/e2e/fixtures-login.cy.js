describe('fixtures-login', () => {
  it.skip('fixturesdemo', () => {
    cy.visit("https://next-realworld.vercel.app/user/login");

    cy.fixture('conduit-lists').then((data) => {
      cy.get(':nth-child(1) > .form-control').type(data.email);
      cy.get(':nth-child(2) > .form-control').type(data.password);
      cy.get('.btn').click();
    });
  });

  it('dataDriven', () => {
    cy.fixture('conduit-lists').then((data) => {
      cy.visit("https://next-realworld.vercel.app/user/login");

      data.forEach((userdata) => {
        cy.get(':nth-child(1) > .form-control').type(userdata.email);
        cy.get(':nth-child(2) > .form-control').type(userdata.password);
        cy.get('.btn').click();
        cy.wait(2000);
      });
    });
  });
});
