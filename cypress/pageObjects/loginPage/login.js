var selectors = require('./selectors')
class login {
    email() {
        return cy.xpath(selectors.emailInput)
    }
    password() {
        return cy.xpath(selectors.passwordInput)
    }
    signInButton() {
        return cy.xpath(selectors.submitButton)
    }
    
}
export default login