function randomnum(maxInt) {
  return Math.floor(Math.random() * (maxInt + 1));
}

describe('Facebook Login ', () => {
  it('Login using Facebook and verify', () => {

    const xpath = require('cypress-xpath')

    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    var email = "mujjazi+2123@gmail.com"
    var password = 'Pakistan@123'

    cy.visit("/")

    cy.xpath("//button[normalize-space()='NO THANKS']", { multiple: true }).click();
    cy.xpath("//div[normalize-space()='Account']").eq(1).click();
    cy.xpath("//button[normalize-space()='CONTINUE WITH AMBER']").click();
    cy.get("#btnCreateAccountWithFacebook").click();
    
  //   cy.intercept({
  //     method: "POST",
  //     url: "https://www.ounass.ae/customer/loginWithEmail",
  //   }).as("login");
  //   cy.wait("@login", { timeout: 25000 });

    cy.wait(5000)
    
    cy.xpath("//span[@class='L2Category-linkText'][normalize-space()='Bags']").click();
    cy.get(".Product-name").eq(0).click();
    cy.xpath("//button[normalize-space()='ADD TO BAG']").click();

  //   cy.intercept({
  //     method: "POST",
  //     url: "https://www.ounass.ae/cart/addItem",
  //   }).as("dataGetFirst");
  //   cy.wait("@dataGetFirst", { timeout: 15000 });

    cy.wait(8000)

    cy.xpath("//a[@aria-label='icon-bag']//div[@class='Popup-iconText']").click();
    cy.xpath("//a[@class='CartTotal-secureCheckout']").click();
  //   cy.xpath("//input[@id='mobileNumber']").type("56464665")
  //   cy.xpath("//div[@class='Select Dropdown is-searchable Select--single']").select("Abu Dhabi");
  //   cy.xpath("//input[@name='city']").type("test");
  //   cy.xpath("//input[@id='street']").type("1");
  cy.xpath("//button[normalize-space()='Continue']").click();

  //   cy.intercept({
  //     method: "POST",
  //     url: "https://www.ounass.ae/checkout/setShippingInformation",
  //   }).as("dataGetFirst");
  //   cy.wait("@dataGetFirst", { timeout: 15000 });

    cy.wait(15000)
    
    cy.url().should('include', 'payment')

    

  })
})
