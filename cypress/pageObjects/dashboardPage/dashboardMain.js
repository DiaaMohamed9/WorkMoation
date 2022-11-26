var selectors = require('./selectors')
class dashboard {
    addTalent() {
        return cy.xpath(selectors.addTalentButton)
    }
    createNewItem() {
        return cy.xpath(selectors.createNewItemButton)
    }
    talentsLink(){
        return cy.xpath(selectors.sidebarTalentsLink)
    }
}
export default dashboard