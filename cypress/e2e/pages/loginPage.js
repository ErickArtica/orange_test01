class loginPage{
    elements = {
        inputUser: ()=> cy.get('[name="username"]'),
        inputPassword: ()=> cy.get('[name="password"]'),
        buttonSubmit: ()=> cy.get('[type="submit"]')
    }
    writeUsername(option){
        this.elements.inputUser().should('be.visible').type(option)
    }

    writePassword(option){
        this.elements.inputPassword().should('be.visible').type(option)
    }

    clickbuttonSubmit(){
        this.elements.buttonSubmit().should('be.visible').click();
    }

}
export default new loginPage()