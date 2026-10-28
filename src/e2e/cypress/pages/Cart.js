import Page from "./Page";

class Cart extends Page {
  constructor() {
    super();
    this.url = "/cart";
  }

  items() {
    return cy.get(".cart-item");
  }

  subtotal() {
    return cy.get(".cart-subtotal");
  }

  empty() {
    return cy.get("#cart-empty");
  }

  continueShopping() {
    return cy.get("#cart-continue");
  }

  checkout() {
    return cy.get("#checkout");
  }
}

module.exports = Cart;
