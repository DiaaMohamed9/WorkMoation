import { faker } from "@faker-js/faker";

var selectors = require("./selectors");
var _ = require("lodash");
const moment = require("moment");

class talentOnbaord {
  chooseCountry(çountry = "Germany") {
    return cy.xpath(
      selectors.chooseCountryOption.replace("CountryName", çountry)
    );
  }
  countryList() {
    return cy.xpath(selectors.chooseCountryButton);
  }
  selectedCountery() {
    return cy.xpath(selectors.selectedCountryName);
  }
  getStart() {
    return cy.xpath(selectors.getStartButton);
  }
  workGlobal() {
    return cy.xpath(selectors.workGlobalButton);
  }
  beginOnboarding() {
    return cy.xpath(selectors.beginOnboardingButton);
  }
  employmentAgreementTitle() {
    return cy.xpath(selectors.employmentAgreementTitle);
  }
  firstName() {
    return cy.xpath(selectors.firstNameInput);
  }
  lastName() {
    return cy.xpath(selectors.lastNameInput);
  }
  talentIsLocalYes() {
    return cy.xpath(selectors.talentIsLocalYesRadio);
  }
  talentIsLocalNo() {
    return cy.xpath(selectors.talentIsLocalNoRadio);
  }
  talentIsSeniorYes() {
    return cy.xpath(selectors.talentIsSeniorYesRadio);
  }
  talentIsSeniorNo() {
    return cy.xpath(selectors.talentIsSeniorNoRadio);
  }
  jobTitle() {
    return cy.xpath(selectors.jobTitleInput);
  }
  jobDescription() {
    return cy.xpath(selectors.jobDescriptionInput);
  }
  businessAssignment() {
    return cy.xpath(selectors.businessAssignmentInput);
  }
  jobDescriptionUpload() {
    return cy.xpath(selectors.jobDescriptionUploadInput);
  }
  fullTime() {
    return cy.xpath(selectors.fullTimeRadio);
  }
  partTime() {
    return cy.xpath(selectors.partTimeRadio);
  }
  hoursPerWeek() {
    return cy.xpath(selectors.hoursPerWeekInput);
  }
  startDate() {
    return cy.xpath(selectors.startDateInput);
  }
  endDate() {
    return cy.xpath(selectors.endDateInput);
  }
  eligibleReimbursements() {
    return cy.xpath(selectors.eligibleReimbursementsInput);
  }
  workFromHome() {
    return cy.xpath(selectors.workFromHomeInput);
  }
  workAddress() {
    return cy.xpath(selectors.workAddressInput);
  }
  costCenter() {
    return cy.xpath(selectors.costCenterInput);
  }
  signatoryFullName() {
    return cy.xpath(selectors.signatoryFullNameInput);
  }
  signatoryTitle() {
    return cy.xpath(selectors.signatoryTitleInput);
  }
  directManagerEmail() {
    return cy.xpath(selectors.directManagerEmailInput);
  }
  continue() {
    return cy.xpath(selectors.continueButton);
  }
  paidTimeOff() {
    return cy.xpath(selectors.paidTimeOffInput);
  }
  probationPeriodEnablement() {
    return cy.xpath(selectors.probationPeriodEnablement);
  }
  chooseProbationPeriodScale() {
    return cy.xpath(selectors.chooseNoticePeroidScaleButton);
  }
  probationPeriod() {
    return cy.xpath(selectors.probationPeriodInput);
  }
  chooseScaleSelectType(type = "Months") {
    return cy.xpath(selectors.ScaleSelect.replace("TYPE", type));
  }
  chooseNoticePeroidScale() {
    return cy.xpath(selectors.chooseNoticePeroidScaleButton);
  }
  noticePeroid() {
    return cy.xpath(selectors.noticePeroidInput);
  }
  anythingElse() {
    return cy.xpath(selectors.anythingElseInput);
  }
  esopProvidedYes() {
    return cy.xpath(selectors.esopProvidedYesRadio);
  }
  esopProvidedNo() {
    return cy.xpath(selectors.esopProvidedNoRadio);
  }
  esopProvidedAcknowledge() {
    return cy.xpath(selectors.esopProvidedAcknowledgeCheck);
  }
  salaryGrossSalary() {
    return cy.xpath(selectors.salaryGrossSalaryInput);
  }
  annualBonusEnablement() {
    return cy.xpath(selectors.annualBonusEnablement);
  }
  totalYearlyBonus() {
    return cy.xpath(selectors.totalYearlyBonusInput);
  }
  bonusPayoutFrequencySelect() {
    return cy.xpath(selectors.bonusPayoutFrequencySelect);
  }
  frequencySelect(frequency = "yearly") {
    return cy.xpath(selectors.frequencySelect.replace("FREQUENCY", frequency));
  }
  bonusAnythingElse() {
    return cy.xpath(selectors.bonusAnythingElseInput);
  }
  signOnBonus() {
    return cy.xpath(selectors.signOnBonusInput);
  }
  candidateEmail() {
    return cy.xpath(selectors.candidateEmailInput);
  }
  generateTalentData(countriesNames) {
    var probationPeriodOption = _.sample([true, false]);
    var esopProvidedOption = _.sample([true, false]);
    var annualBonusEnablementOption = _.sample([true, false]);
    var workFromHomeOption = _.sample([true, false]);
    return {
      countryName: "Germany",
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      talentIsLocal: _.sample([true, false]),
      talentIsSenior: _.sample([true, false]),
      jobTitle: faker.name.jobTitle(),
      jobDescription: faker.name.jobDescriptor(),
      jobDescriptionUpload: faker.name.jobTitle(),
      businessAssignment: faker.name.jobDescriptor(),
      fullTime: _.sample([true, false]),
      hoursPerWeek: faker.datatype.number({ min: 10, max: 50 }),
      startDate: moment().add(1, "M").format("DD-MM-YYYY"),
      endDate: moment().add(5, "M").format("DD-MM-YYYY"),
      eligibleReimbursements: _.sample([true, false]),
      workFromHome: workFromHomeOption,
      workAddress: workFromHomeOption
        ? faker.address.streetAddress()
        : undefined,
      costCenter: faker.datatype.number({ min: 10, max: 50 }),
      signatoryFullName: faker.name.firstName(),
      signatoryTitle: faker.name.jobTitle(),
      directManagerEmail: faker.internet.email(),
      paidTimeOff: faker.datatype.number({ min: 20, max: 99 }),
      probationPeriodEnablement: probationPeriodOption,
      probationPeriodScaleType: probationPeriodOption ? "Months" : undefined,
      probationPeriod: probationPeriodOption
        ? faker.datatype.number({ min: 0, max: 6 })
        : undefined,
      probationPeriodEnablement: probationPeriodOption,
      noticePeroidScaleType: "Months",
      noticePeroid: faker.datatype.number({ min: 1, max: 9 }),
      anythingElse: faker.random.words(5),
      esopProvided: esopProvidedOption,
      esopProvidedAcknowledge: esopProvidedOption ? true : undefined,
      salaryGrossSalary: faker.datatype.number({ min: 5000, max: 9000 }),
      annualBonusEnablement: annualBonusEnablementOption,
      totalYearlyBonus: annualBonusEnablementOption
        ? faker.datatype.number({ min: 5000, max: 9000 })
        : undefined,
      bonusPayoutFrequencySelect: annualBonusEnablementOption
        ? "yearly"
        : undefined,
      bonusAnythingElse: annualBonusEnablementOption
        ? faker.random.words()
        : undefined,
      signOnBonus: faker.datatype.number({ min: 5000, max: 9000 }),
      candidateEmail: faker.internet.email(),
    };
  }
}
export default talentOnbaord;
