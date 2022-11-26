module.exports = {
  chooseCountryOption:
    "//*[contains(@id,'select') and contains(@id,'option') and text()='CountryName']",
  chooseCountryButton: '//label[@for="select-country"]/following::*[1]',
  selectedCountryName: '//*[@data-highcharts-chart="1"]/parent::*//h1',
  getStartButton: '//*[@data-cy="country-selection-get-started-btn"]',
  workGlobalButton: '//*[@data-cy="product-selection-workglobal-option"]',
  beginOnboardingButton:
    '//*[@data-cy="product-selection-begin-onboarding-btn"]',
  employmentAgreementTitle:
    '//*[@data-cy="steps-employment-agreement-details-title"]',
  firstNameInput: '//*[@data-cy="steps-candidate-first-name-input"]',
  lastNameInput: '//*[@data-cy="steps-candidate-last-name-input"]',
  talentIsLocalYesRadio: '//*[@data-cy="steps-talent-is-local-yes-radio"]',
  talentIsLocalNoRadio: '//*[@data-cy="steps-talent-is-local-yes-radio"]',
  talentIsSeniorYesRadio: '//*[@data-cy="steps-talent-is-senior-yes-radio"]',
  talentIsSeniorNoRadio: '//*[@data-cy="steps-talent-is-senior-no-radio"]',
  jobTitleInput: '//*[@data-cy="steps-job-title-input"]',
  jobDescriptionInput: '//*[@data-cy="steps-job-description-textarea"]',
  businessAssignmentInput:
    '//*[@data-cy="steps-business-assignment-context-textarea"]',
  jobDescriptionUploadInput:
    '//*[@data-cy="steps-upload-job-description-upload-input"]',
  fullTimeRadio: '//*[@data-cy="steps-employment-type-full-time-radio"]',
  partTimeRadio: '//*[@data-cy="steps-employment-type-part-time-radio"]',
  hoursPerWeekInput: '//*[@data-cy="steps-hours-per-week-stepper-input"]',
  startDateInput: '//*[@data-cy="steps-start-date-input"]//input',
  endDateInput: '//*[@data-cy="steps-end-date-input"]//input',
  eligibleReimbursementsInput:
    '//*[@data-cy="steps-eligible-reimbursements-selector-switch"]//input',
  workFromHomeInput:
    '//*[@data-cy="steps-work-from-home-selector-switch"]//input',
  workAddressInput: '//*[@data-cy="steps-work-address-textarea"]',
  costCenterInput: '//*[@data-cy="steps-cost-center-input"]',
  signatoryFullNameInput: '//*[@data-cy="steps-signatory-full-name-input"]',
  signatoryTitleInput: '//*[@data-cy="steps-signatory-title-input"]',
  directManagerEmailInput: '//*[@data-cy="steps-direct-manager-email-input"]',
  continueButton: '//*[@data-cy="steps-continue-btn"]',
  paidTimeOffInput: '//*[@data-cy="steps-paid-time-off-stepper-input"]',
  probationPeriodEnablement:
    '//*[@data-cy="steps-probation-period-selector-switch"]',
  probationPeriodInput: '//*[@data-cy="steps-probation-period-stepper-input"]',
  chooseprobationPeriodScaleButton:
    '//label[@data-cy="steps-probation-period-required-field-label"]/following::*[contains(@class,"control")][1]',
  ScaleSelect:
    "//*[contains(@id,'select') and contains(@id,'option') and text()='TYPE']",
  chooseNoticePeroidScaleButton:
    '//label[@data-cy="steps-termination-notice-period-required-field-label"]/following::*[contains(@class,"control")][1]',
  noticePeroidInput:
    '//*[@data-cy="steps-termination-notice-period-stepper-input"]',
  anythingElseInput: '//*[@data-cy="steps-anything-else-textarea"]',
  esopProvidedYesRadio: '//*[@data-cy="steps-esop-provided-yes-radio"]',
  esopProvidedNoRadio: '//*[@data-cy="steps-esop-provided-no-radio"]',
  esopProvidedAcknowledgeCheck:
    '//*[@data-cy="steps-esop-provided-acknowledge-checkbox"]',
  salaryGrossSalaryInput: '//*[@data-cy="steps-salary-gross-salary-input"]',
  annualBonusEnablement:
    '//*[@data-cy="steps-annual-bonus-selector-switch"]//input',
  totalYearlyBonusInput: '//*[@data-cy="steps-total-yearly-bonus-input"]',
  bonusPayoutFrequencySelect:
    '//label[@data-cy="steps-bonus-payout-frequency-required-field-label"]/following::*[1]',
  frequencySelect:
    "//*[contains(@id,'select') and contains(@id,'option') and text()='FREQUENCY']",
  bonusAnythingElseInput: '//*[@data-cy="steps-bonus-anything-else-textarea"]',
  signOnBonusInput: '//*[@data-cy="steps-sign-on-bonus-input"]',
  candidateEmailInput: '//*[@data-cy="steps-candidate-email-input"]',
};
