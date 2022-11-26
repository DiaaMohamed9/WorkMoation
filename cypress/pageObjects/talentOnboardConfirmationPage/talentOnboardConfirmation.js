import { faker } from "@faker-js/faker";

var selectors = require("./selectors");
var _ = require("lodash");
const moment = require("moment");

class talentOnbaordConfirmation {
  firstName() {
    return cy.xpath(selectors.firstName);
  }
  lastName() {
    return cy.xpath(selectors.lastName);
  }
  eligible() {
    return cy.xpath(selectors.eligible);
  }
  executive() {
    return cy.xpath(selectors.executive);
  }
  jobTitle() {
    return cy.xpath(selectors.jobTitle);
  }
  jobDescription() {
    return cy.xpath(selectors.jobDescription);
  }
  uploadComplet() {
    return cy.xpath(selectors.uploadComplet);
  }
  businessAssignmen() {
    return cy.xpath(selectors.businessAssignmen);
  }
  employmentType() {
    return cy.xpath(selectors.employmentType);
  }
  workingHours() {
    return cy.xpath(selectors.workingHours);
  }
  contractType() {
    return cy.xpath(selectors.contractType);
  }
  startDate() {
    return cy.xpath(selectors.startDate);
  }
  endDate() {
    return cy.xpath(selectors.endDate);
  }
  reimburseExpenses() {
    return cy.xpath(selectors.reimburseExpenses);
  }
  workFromHome() {
    return cy.xpath(selectors.workFromHome);
  }
  costCenter() {
    return cy.xpath(selectors.costCenter);
  }
  nameOfSignatory() {
    return cy.xpath(selectors.nameOfSignatory);
  }
  titleOfSignatory() {
    return cy.xpath(selectors.titleOfSignatory);
  }
  emailOfDirectManager() {
    return cy.xpath(selectors.emailOfDirectManager);
  }
  paidTimeOff() {
    return cy.xpath(selectors.paidTimeOff);
  }
  probationaryPeriod() {
    return cy.xpath(selectors.probationaryPeriod);
  }
  probationPeriod() {
    return cy.xpath(selectors.probationPeriod);
  }
  noticePeriod() {
    return cy.xpath(selectors.noticePeriod);
  }
  anythingElse() {
    return cy.xpath(selectors.anythingElse);
  }
  provideESOP() {
    return cy.xpath(selectors.provideESOP);
  }
  baseSalary() {
    return cy.xpath(selectors.baseSalary);
  }
  receiveBonus() {
    return cy.xpath(selectors.receiveBonus);
  }
  signOnBonus() {
    return cy.xpath(selectors.signOnBonus);
  }

  talentEmail() {
    return cy.xpath(selectors.talentEmail);
  }
  confirmSummary() {
    return cy.xpath(selectors.confirmSummary);
  }
  finishButton() {
    return cy.xpath(selectors.finishButton);
  }
  completeOnboarding() {
    return cy.xpath(selectors.completeOnboarding);
  }
}
export default talentOnbaordConfirmation;
