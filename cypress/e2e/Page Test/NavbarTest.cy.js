import NAVBAR from "../../support/Asigmentpom/Navbarpage";

describe('Flipkart Navigation & Actions', () => {
  it('should perform a series of navigation and actions', () => {
    NAVBAR.EnterUrl(); // Visit the homepage
    cy.wait(2000); // Wait for page load
    NAVBAR.Home();
    cy.wait(2000);
    NAVBAR.AboutUs();
    cy.wait(2000);
    NAVBAR.ContactUs();
  });
});
