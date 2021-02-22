function randomnum(maxInt) {
  return Math.floor(Math.random() * (maxInt + 1));
}

describe('Registers a new user', () => {
  it('Registers and Validates the email', () => {

    const xpath = require('cypress-xpath')

    var phone = +97167324238

    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    var name = 'mujtaba'
    var username = 'mujjazi'
    var domain = '@gmail.com'
    var rand = '+' + randomnum(10000)
    var randemail = username + rand + domain
    var number = 123456789
    var password = 'Pakistan@123'

    cy.visit("/")

    cy.xpath("//button[normalize-space()='NO THANKS']", { multiple: true }).click();
    cy.xpath("//div[normalize-space()='Account']").eq(1).click();
    cy.xpath("//a[normalize-space()='Create Account']").click();
    cy.xpath("//input[@name='firstName']").type(name);
    cy.xpath("//input[@name='lastName']").type(name);
    cy.xpath("//input[@class='Profile-email']").type(randemail);
    cy.xpath("//input[@name='password']").type(password);
    cy.xpath("//button[normalize-space()='Create Account']").click();

    cy.intercept({
      method: "POST",
      url: "https://www.ounass.ae/customer/register",
    }).as("dataGetFirst");
    cy.wait("@dataGetFirst", { timeout: 15000 });

    cy.wait(5000)
    cy.visit("/customer/information")
    cy.xpath("//input[@name='email']", { timeout: 15000 }).should('be.disabled');
    cy.xpath("//input[@name='email']", { timeout: 15000 }).should('have.value', randemail + " (Not editable)");

  })
})
