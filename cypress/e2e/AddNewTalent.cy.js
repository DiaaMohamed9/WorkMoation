import Login from "../pageObjects/loginPage/login";
import Main from "../pageObjects/dashboardPage/dashboardMain";
import TalentOnboard from "../pageObjects/talentOnboardPage/talentOnboard";
import TalentOnboardConfirmation from "../pageObjects/talentOnboardConfirmationPage/talentOnboardConfirmation";
import Talents from "../pageObjects/talentsPage/talents";
const moment = require("moment");

describe("Login", function () {
  const email = "aliaa+qahrmanager@workmotion.com";
  const password = "Test1234";
  const login = new Login();
  const main = new Main();
  const talentOnboard = new TalentOnboard();
  const talentOnboardConfirmation = new TalentOnboardConfirmation();
  const talents = new Talents();
  before("", () => {});
  beforeEach("", () => {
    cy.restoreLocalStorage();
  });
  it("Sign in", function () {
    /* test the login flow and save the cookies and locastorage to use it at all other test cases without need to login again */
    cy.visit("https://beta.workmotion.com/");
    login.email().type(email);
    login.password().type(password);
    cy.intercept({
      url: "https://login-beta.workmotion.com/oauth2/default/v1/userinfo",
      method: "GET",
    }).as("userInfo"); //to check the login done successfully after login get the user data to make sure everything working fine
    login.signInButton().should("be.visible").click();
    cy.wait("@userInfo").then((intercept) => {
      expect(intercept.response.statusCode).to.eq(200); // check the user info after login
      // expect(intercept.response.body.email).to.eq(email)
    });
    main.addTalent().should("be.visible");
    cy.saveLocalStorage(); //to avoid logout between the testcases
  });
  it("Add new talent flow", function () {
    /* test the Add new talent flow by checking the existance of the fields and also by filling all of them and save the filled data to validate against it */
    cy.intercept({
      url: " https://apigw-beta.workmotion.com/schema-countries",
      method: "GET",
    }).as("countriesInfo"); //make sure we got the country list API
    main.addTalent().should("be.visible").click();
    cy.wait(5000);
    main.createNewItem().click();
    cy.wait("@countriesInfo").then((intercept) => {
      expect(intercept.response.statusCode).to.eq(200);
    });
    var generatedTalentData = talentOnboard.generateTalentData(); //genrate data for all needed data to add new talent and save that data to validate against it at the next tests
    //fill all needed data and check the input fields is visible
    talentOnboard.countryList().should("be.visible").click();
    talentOnboard
      .chooseCountry(generatedTalentData.countryName)
      .scrollIntoView()
      .should("be.visible")
      .click();
    talentOnboard
      .selectedCountery()
      .should("be.visible")
      .then(($el) => {
        expect($el.text()).eq(generatedTalentData.countryName);
      });
    cy.wait(5000);
    talentOnboard
      .getStart()
      .should("be.visible")
      .should("be.not.disabled")
      .click();
    talentOnboard.workGlobal().should("be.visible").click();
    cy.wait(5000);
    talentOnboard
      .beginOnboarding()
      .should("be.visible")
      .should("be.not.disabled")
      .click();
    talentOnboard.employmentAgreementTitle().should("be.visible");
    talentOnboard.firstName().click().type(generatedTalentData.firstName);
    talentOnboard.lastName().click().type(generatedTalentData.lastName);
    generatedTalentData.talentIsLocal
      ? talentOnboard.talentIsLocalYes().click()
      : talentOnboard.talentIsLocalNo().click();
    generatedTalentData.talentIsSenior
      ? talentOnboard.talentIsSeniorYes().click()
      : talentOnboard.talentIsSeniorNo().click();
    talentOnboard.jobTitle().click().type(generatedTalentData.jobTitle);
    talentOnboard
      .jobDescription()
      .click()
      .type(generatedTalentData.jobDescription);
    cy.writeFile(
      "cypress/fixtures/jobDescription.txt",
      generatedTalentData.jobDescriptionUpload
    ).then(() => {
      talentOnboard.jobDescriptionUpload().attachFile("jobDescription.txt");
    });
    talentOnboard
      .businessAssignment()
      .click()
      .type(generatedTalentData.businessAssignment);
    generatedTalentData.fullTime
      ? talentOnboard.fullTime().click()
      : talentOnboard.partTime().click();
    talentOnboard
      .hoursPerWeek()
      .click()
      .clear()
      .type(generatedTalentData.hoursPerWeek);
    talentOnboard
      .startDate()
      .click()
      .clear()
      .type(generatedTalentData.startDate);
    talentOnboard
      .endDate()
      .click({ force: true })
      .clear()
      .type(generatedTalentData.endDate);
    talentOnboard.eligibleReimbursements().then(($el) => {
      let test = $el.prop("checked");
      test == generatedTalentData.eligibleReimbursements
        ? null
        : talentOnboard.eligibleReimbursements().click({ force: true });
    });
    talentOnboard.workFromHome().then(($el) => {
      let test = $el.prop("checked");
      test == generatedTalentData.workFromHome
        ? null
        : talentOnboard.workFromHome().click({ force: true });
    });
    generatedTalentData.workFromHome
      ? talentOnboard
          .workAddress()
          .click()
          .clear()
          .type(generatedTalentData.workAddress)
      : null;
    talentOnboard
      .costCenter()
      .click()
      .clear()
      .type(generatedTalentData.costCenter);
    talentOnboard
      .signatoryFullName()
      .click()
      .clear()
      .type(generatedTalentData.signatoryFullName);
    talentOnboard
      .signatoryTitle()
      .click()
      .clear()
      .type(generatedTalentData.signatoryTitle);
    talentOnboard
      .directManagerEmail()
      .click()
      .clear()
      .type(generatedTalentData.directManagerEmail);
    talentOnboard.continue().click();
    cy.wait(5000);
    talentOnboard
      .paidTimeOff()
      .click()
      .clear()
      .type(generatedTalentData.paidTimeOff);
    talentOnboard.probationPeriodEnablement().then(($el) => {
      let test = $el.prop("checked");
      test == generatedTalentData.probationPeriodEnablement
        ? null
        : talentOnboard.probationPeriodEnablement().click({ force: true });
    });
    generatedTalentData.probationPeriodEnablement
      ? talentOnboard.chooseProbationPeriodScale().click()
      : null;
    generatedTalentData.probationPeriodEnablement
      ? talentOnboard
          .chooseScaleSelectType(generatedTalentData.probationPeriodScaleType)
          .click()
      : null;
    generatedTalentData.probationPeriodEnablement
      ? talentOnboard
          .probationPeriod()
          .click()
          .clear()
          .type(generatedTalentData.probationPeriod)
      : null;
    talentOnboard.chooseNoticePeroidScale().click();
    talentOnboard
      .chooseScaleSelectType(generatedTalentData.noticePeroidScaleType)
      .click();
    talentOnboard
      .noticePeroid()
      .click()
      .clear()
      .type(generatedTalentData.noticePeroid);
    talentOnboard
      .anythingElse()
      .click()
      .clear()
      .type(generatedTalentData.anythingElse);
    talentOnboard.continue().click();
    cy.wait(5000);
    generatedTalentData.esopProvided
      ? talentOnboard.esopProvidedYes().click()
      : talentOnboard.esopProvidedNo().click();
    generatedTalentData.esopProvided
      ? talentOnboard.esopProvidedAcknowledge().click({ force: true })
      : null;
    talentOnboard
      .salaryGrossSalary()
      .click()
      .clear()
      .type(generatedTalentData.salaryGrossSalary);
    talentOnboard.annualBonusEnablement().then(($el) => {
      let test = $el.prop("checked");
      test == generatedTalentData.annualBonusEnablement
        ? null
        : talentOnboard.annualBonusEnablement().click({ force: true });
    });
    generatedTalentData.annualBonusEnablement
      ? talentOnboard
          .totalYearlyBonus()
          .click()
          .clear()
          .type(generatedTalentData.totalYearlyBonus)
      : null;
    generatedTalentData.annualBonusEnablement
      ? talentOnboard.bonusPayoutFrequencySelect().click()
      : null;
    generatedTalentData.annualBonusEnablement
      ? talentOnboard
          .frequencySelect(generatedTalentData.bonusPayoutFrequencySelect)
          .click()
      : null;
    generatedTalentData.annualBonusEnablement
      ? talentOnboard
          .bonusAnythingElse()
          .click()
          .clear()
          .type(generatedTalentData.bonusAnythingElse)
      : null;
    talentOnboard
      .signOnBonus()
      .click()
      .clear()
      .type(generatedTalentData.signOnBonus);
    cy.writeFile(
      "cypress/fixtures/talentGeneratedData.json",
      generatedTalentData
    );
    talentOnboard.continue().click();
    cy.wait(5000);
    talentOnboard
      .candidateEmail()
      .click()
      .clear()
      .type(generatedTalentData.candidateEmail);
    talentOnboard.continue().click();
    cy.wait(5000);
  });
  it("confirm the new talent info", function () {
    /* test the confirm the new talent info flow by checking the generated data against the actual saved data  */
    cy.readFile("cypress/fixtures/talentGeneratedData.json").then(
      (expectedData) => {
        talentOnboardConfirmation
          .firstName()
          .should("have.text", expectedData.firstName);
        talentOnboardConfirmation
          .lastName()
          .should("have.text", expectedData.lastName);
        talentOnboardConfirmation
          .executive()
          .should("have.text", expectedData.talentIsSenior ? "Yes" : "No");
        talentOnboardConfirmation
          .jobTitle()
          .should("have.text", expectedData.jobTitle);
        talentOnboardConfirmation
          .jobDescription()
          .should("have.text", expectedData.jobDescription);
        talentOnboardConfirmation
          .businessAssignmen()
          .should("have.text", expectedData.businessAssignment);
        talentOnboardConfirmation
          .employmentType()
          .should(
            "have.text",
            expectedData.fullTime ? "full-time" : "part-time"
          );
        talentOnboardConfirmation
          .workingHours()
          .should("have.text", `${expectedData.hoursPerWeek.toString()} `);
        talentOnboardConfirmation
          .startDate()
          .should(
            "have.text",
            moment(expectedData.startDate, "DD-MM-YYYY").format("YYYY-MM-DD")
          );
        talentOnboardConfirmation
          .endDate()
          .should(
            "have.text",
            moment(expectedData.endDate, "DD-MM-YYYY").format("YYYY-MM-DD")
          );
        talentOnboardConfirmation
          .paidTimeOff()
          .should("have.text", `${expectedData.paidTimeOff.toString()} Days`);
        talentOnboardConfirmation.confirmSummary().click({ force: true });
        talentOnboardConfirmation.finishButton().click();
        cy.wait(5000);
        talentOnboardConfirmation.completeOnboarding().click();
        cy.wait(5000);
      }
    );
  });
  it("check the new talent at talents page", function () {
    /* test the the new talent at talents page  by goging to the talents page and validate the talent added with the expected data  */
    main.talentsLink().click();
    cy.wait(5000);
    cy.readFile("cypress/fixtures/talentGeneratedData.json").then(
      (expectedData) => {
        var expectedTalentName = `${expectedData.firstName} ${expectedData.lastName}`;
        talents
          .talentName(expectedTalentName)
          .should("have.text", expectedTalentName);
        talents
          .countryName(expectedTalentName)
          .should("have.text", expectedData.countryName);
        talents
          .creationDate(expectedTalentName)
          .should("have.text", moment().format("YYYY-MM-DD"));
        if (
          talents.status(expectedTalentName).then(($el) => {
            $el.text() != "ONBOARDING";
          })
        ) {
          //wait until the talent become Onboarding status not draft if the correct flow need to wait
          cy.waitUntil(
            () =>
              cy.reload().then(() => {
                talents.status(expectedTalentName).then(($el) => {
                  $el.text() == "ONBOARDING";
                });
              }),
            {
              errorMsg: "This is a custom error message", // overrides the default error message
              timeout: 2000, // waits up to 2000 ms, default to 5000
              interval: 500, // performs the check every 500 ms, default to 200
            }
          );
        }
        talents.status(expectedTalentName).should("have.text", "ONBOARDING");
      }
    );
  });
});
