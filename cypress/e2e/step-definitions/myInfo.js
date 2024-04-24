import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import myinfoPage from "../pages/myinfoPage";

/*Given("I open Orange page", () => {
    cy.visit("/");
  });
When("I write {string} and {string}", (username,password) => {
    loginPage.writeUsername(username);
    loginPage.writePassword(password);
});
Then("I click on the button login", () => {
    loginPage.clickbuttonSubmit();

});
*/
Then("I click on the menu my info", () => {
    myinfoPage.clickspanMyInfo();
    
});
When("I write full name {string},{string},{string}", (firstname,middlename,lastname) => {
    myinfoPage.writeFirstName(firstname);
    myinfoPage.writeMiddleName(middlename);
    myinfoPage.writeLastName(lastname);
});
When("I write employee information {string},{string}", (employeeid,otherid) => {
    myinfoPage.writeEmployeeId(employeeid);
    myinfoPage.writeOtherId(otherid);
});
When("I write Driver's License Number {string} and select when it expire {string}", (licensenum,expiredate) => {
    myinfoPage.writeLicenseNum(licensenum);
    myinfoPage.writeExpireDate(expiredate);
});
When("I select Nationality {string} and Marital Status {string}", (nacionality,maritalstatus) => {
    myinfoPage.selectNacionality(nacionality);
    myinfoPage.selectMaritalStatus(maritalstatus);
});
When("I select Date of Birth {string} and Gender", (dateofbirth) => {
    myinfoPage.writeDateofBirth(dateofbirth);
    myinfoPage.radioGenderFemale();
});
When("I select Blood Type {string} and write Test_Field {string}", (bloodtype,testfield) => {
    myinfoPage.selectBloodType(bloodtype);
    myinfoPage.writeTestField(testfield);
});
When("I click in the button add", () => {
    myinfoPage.clickButtonAdd();
});
When("I click in the button browse to up a file", () => {
    myinfoPage.clickButtonBrowseFile();
});
Then("I click in the button save and add the file", () => {
    myinfoPage.clickButtonSaveFile();
});