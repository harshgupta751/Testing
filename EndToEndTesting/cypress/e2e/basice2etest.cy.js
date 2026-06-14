 /// <reference types="cypress" />


describe("Basic E2E testing", ()=>{

beforeEach(()=>{

    cy.visit("https://app.100xdevs.com")

})

it("if login is working", ()=>{

cy.contains("Login")
cy.contains("Login").click()

cy.contains("Welcome to 100xDevs", {timeout: 10000})
cy.get("#email").focus().type("yourloginemail")
cy.get("#password").type("yourloginpassword")

cy.get("section")
  .contains("button", "Login")
  .click()
cy.contains("View Course", {timeout: 10000})



})

})