class myinfoPage{
    elements = {
        //inputUser: ()=> cy.get('[name="username"]'),
        //inputPassword: ()=> cy.get('[name="password"]'),
        //buttonSubmit: ()=> cy.get('[type="submit"]')
        spanMyInfo: ()=> cy.get('.oxd-sidepanel-body ul.oxd-main-menu li a span'),
        inputFirstName: ()=> cy.get('[name="firstName"]'),
        inputMiddleName: ()=> cy.get('[name="middleName"]'),
        inputLastName: ()=> cy.get('[name="lastName"]'),
        inputEmployeeId: ()=> cy.get('.oxd-input-group input'),
        inputOtherId: ()=> cy.get('.oxd-input-group input'),
        inputLicenseNum: ()=> cy.get('.oxd-input-group input'),
        inputExpireDate: ()=> cy.get('.oxd-input-group input'),
        comboNacionality: ()=> cy.get('.oxd-input-group div.oxd-select-text--after'),
        comboMaritalStatus: ()=> cy.get('.oxd-input-group div.oxd-select-text--after'),
        inputDateofBirth: ()=> cy.get('.oxd-input-group input'),
        radioButtonGender: ()=> cy.get('.oxd-input-group input'),
        comboBloodType: ()=> cy.get('.oxd-input-group div.oxd-select-text--after'),
        inputTestField: ()=> cy.get('.oxd-input-group input'),
        buttonAdd: ()=> cy.get('.orangehrm-attachment button'),
        buttonBrowseFile: ()=> cy.get('.oxd-input-group input'),
        buttonSaveFile: ()=> cy.get('.oxd-form-actions button')
    }
    /*writeUsername(option){
        this.elements.inputUser().should('be.visible').type(option)
    }

    writePassword(option){
        this.elements.inputPassword().should('be.visible').type(option)
    }

    clickbuttonSubmit(){
        this.elements.buttonSubmit().should('be.visible').click();
    }
    */
   clickspanMyInfo(){
        this.elements.spanMyInfo().eq(5).should('be.visible').click();
   }
   writeFirstName(option){
       this.elements.inputFirstName().clear().should('be.visible').type(option);
   }
   writeMiddleName(option){
       this.elements.inputMiddleName().clear().should('be.visible').type(option);
   }
   writeLastName(option){
       this.elements.inputLastName().clear().should('be.visible').type(option);
   }
   writeEmployeeId(option){
       this.elements.inputEmployeeId().eq(3).clear().should('be.visible').type(option);
   }
   writeOtherId(option){
       this.elements.inputOtherId().eq(4).clear().should('be.visible').type(option);
   }
   writeLicenseNum(option){
       this.elements.inputLicenseNum().eq(5).clear().should('be.visible').type(option);
   }
   writeExpireDate(date){
       this.elements.inputExpireDate().eq(6).clear().type(date).click();
   }
   selectNacionality(option){
       this.elements.comboNacionality().eq(0).click().then(()=>{
        cy.contains(option).click();
       })
   }
   selectMaritalStatus(option){
       this.elements.comboMaritalStatus().eq(1).click().then(()=>{
       cy.contains(option).click();
       })
   }
   writeDateofBirth(date){
       this.elements.inputDateofBirth().eq(7).clear().type(date).click();
   }
   radioGenderFemale(){
       this.elements.radioButtonGender().eq(9).click({force:true});
   }
   selectBloodType(option){
       this.elements.comboBloodType().eq(2).click().then(()=>{
            cy.contains(option).click();
       })
   }
   writeTestField(date){
       this.elements.inputTestField().eq(10).clear().type(date).click();
   }
   clickButtonAdd(){
       this.elements.buttonAdd().eq(0).should('be.visible').click();
   }
   clickButtonBrowseFile(){
       this.elements.buttonBrowseFile().eq(11).click({force:true}).selectFile({
            contents: 'cypress/e2e/pages/HTML-11.pdf',
            mimeType: 'application/pdf',
            },{force:true});  
   }
   clickButtonSaveFile(){
       this.elements.buttonSaveFile().eq(3).should('be.visible').click();
   }
}
export default new myinfoPage()