export class equipMent {


    weblocators = {
        btn_navigation: '[fusenavbarvertical= "toggleBar"]',  
        btn_equipment: '.nav-link-title.ng-star-inserted', 
        btn_addEquipment: '[data-lang-key="APP_EQUIPMENTS.ADD_EQUIPMENTS"]',
        choose_iconRandomly: '.inactive-img',
        txt_eqID: '[formcontrolname="EquipmentId"]',
        txt_name: '[formcontrolname="EquipmentName"]',
        dd_type: '[formcontrolname="EquipmentType"]',
        dd_typeSelect: '.mat-ripple.mat-option-ripple',
        txt_maxLoad: '[formcontrolname="MaxLoad"]',
        txt_shortDescription: '[formcontrolname="EquipmentDescription"]',
        txt_additionalcomment: '[formcontrolname="EquipmentComment"]',
        btn_equipmentSave: '[type="submit"]'

    }

    clickNavigationButton()
    {
        cy.get(this.weblocators.btn_navigation).click();
    }
    navigateMaterial()
    {
        cy.get(this.weblocators.btn_equipment).contains('Equipment').click();
    }
    clickAddEquipment()
    {
        cy.get(this.weblocators.btn_addEquipment).click({timeout: 3000},{force: true});
    }

    chooseEquimentIconRandomly()
    {
        cy.get(this.weblocators.choose_iconRandomly).then(items =>{
            //expect(items.length).to.eq(12);
            const randomIcon = Math.floor(Math.random() *8);
            cy.wrap(items).eq(randomIcon).click()
        })
    }
    typeEquipmentId()
    {
        const randomId = Math.floor(Math.random() *100);
        cy.get(this.weblocators.txt_eqID).type('m' + `${randomId}`)
    }
    typeEquipmentName()
    {
        const randomName = Math.floor(Math.random() *1000);
        cy.get(this.weblocators.txt_name).type(`equipment${randomName}`);
    }

    selectDropdownType()
    {
        cy.get(this.weblocators.dd_type).click();
        cy.get(this.weblocators.dd_typeSelect).eq(2).click({force: true});
    }
    enterMaxLoad(maxload)
    {
        cy.get(this.weblocators.txt_maxLoad).type(maxload)
    }
    enterShortDescription(shortDescription)
    {
        cy.get(this.weblocators.txt_shortDescription).type(shortDescription);
    }

    enterAdditionalComment(additionalComment)
    {
        cy.get(this.weblocators.txt_additionalcomment).type(additionalComment)
    }
    clickSaveButton()
    {
        cy.get(this.weblocators.btn_equipmentSave).click();
    }



}