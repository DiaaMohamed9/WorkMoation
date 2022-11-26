module.exports = {
  firstName: "//p[contains(text(),'first name')]/following::p[1]",
  lastName: "//p[contains(text(),'last name')]/following::p[1]",
  eligible: "//p[contains(text(),'eligible')]/following::p[1]",
  executive: "//p[contains(text(),'executive')]/following::p[1]",
  jobTitle: "//p[contains(text(),'Job title')]/following::p[1]",
  jobDescription: "//p[contains(text(),'Job description')]/following::p[1]",
  uploadComplet: "//p[contains(text(),'Upload complet')]/following::p[1]",
  businessAssignmen:
    "//p[contains(text(),'Business assignmen')]/following::p[1]",
  employmentType: "//p[contains(text(),'Employment type')]/following::p[1]",
  workingHours: "//p[contains(text(),'Working Hours')]/following::p[1]",
  contractType: "//p[contains(text(),'Contract type')]/following::p[1]",
  startDate: "//p[contains(text(),'start date')]/following::p[1]",
  endDate: "//p[contains(text(),'end date')]/following::p[1]",
  reimburseExpenses:
    "//p[contains(text(),'reimburse expenses')]/following::p[1]",
  workFromHome: "//p[contains(text(),'work from home')]/following::p[1]",
  costCenter: "//p[contains(text(),'Cost Center')]/following::p[1]",
  nameOfSignatory: "//p[contains(text(),'Name of signatory')]/following::p[1]",
  titleOfSignatory:
    "//p[contains(text(),'Title of signatory')]/following::p[1]",
  emailOfDirectManager:
    "//p[contains(text(),'Email of direct manager')]/following::p[1]",
  paidTimeOff: "//p[contains(text(),'PTO')]/following::p[1]",
  probationaryPeriod:
    "//p[contains(text(),'probationary period')]/following::p[1]",
  probationPeriod: "//p[contains(text(),'Probation period')]/following::p[1]",
  noticePeriod: "//p[contains(text(),'Notice period')]/following::p[1]",
  anythingElse: "//p[contains(text(),'Anything else')]/following::p[1]",
  provideESOP: "//p[contains(text(),'provide ESOP')]/following::p[1]",
  baseSalary: "//p[contains(text(),'Base salary')]/following::p[1]",
  receiveBonus: "//p[contains(text(),'receive a bonus')]/following::p[1]",
  signOnBonus: "//p[contains(text(),'Sign-on bonus')]/following::p[1]",
  talentEmail: "//p[contains(text(),'email')]/following::p[1]",
  finishButton: '//*[@data-cy="steps-finish-btn"]',
  confirmSummary: '//*[@data-cy="steps-confirm-summary-checkbox"]',
  completeOnboarding: '//*[@data-cy="steps-completed-onboarding-card-go-btn"]',
};
