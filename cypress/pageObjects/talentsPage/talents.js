import { faker } from '@faker-js/faker'

var selectors = require('./selectors')
var _ = require('lodash');
const moment = require('moment')

class talentsTable {
    talentName(name) {
        return cy.xpath(selectors.talentNameAtTalentsTable.replace('NAME',name))
    }
    countryName(name) {
        return cy.xpath(selectors.countryNameAtTalentsTable.replace('NAME',name))
    }
    creationDate(name) {
        return cy.xpath(selectors.creationDateAtTalentsTable.replace('NAME',name))
    }
    status(name) {
        return cy.xpath(selectors.statusAtTalentsTable.replace('NAME',name))
    }
}
export default talentsTable