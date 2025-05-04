export class equipMent {


    weblocators = {
        btn_navigation: '[fusenavbarvertical= "toggleBar"]',  
        btn_equipment: '.nav-link-title.ng-star-inserted', 
        btn_addEquipment: '[data-lang-key="APP_EQUIPMENTS.ADD_EQUIPMENTS"]',
        choose_iconRandomly: '.inactive-img',
        txt_eqID: '[data-lang-key="APP_EQUIPMENTS.EQUIPMENT_ID"]',
        txt_name: '[formcontrolname="EquipmentName"]',
        dd_type: '[formcontrolname="EquipmentType"]',
        dd_typeSelect: '[role="option"]', //all the Category options
        txt_maxLoad: '[formcontrolname="MaxLoad"]',
        txt_shortDescription: '[formcontrolname="EquipmentDescription"]',
        txt_additionalcomment: '[formcontrolname="EquipmentComment"]',
        btn_equipmentSave: '[type="submit"]',

        //Bookable
        toggle_Bookable: '[role="switch"]',//first
        rd_FreeOfcost: '[type="radio"]', //4th option
        btn_next: '[data-lang-key="NEXT"]',



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
        cy.get(this.weblocators.txt_eqID).type('1.' + `${randomId}`)
    }
    typeEquipmentName()
    {
        const randomName = Math.floor(Math.random() *1000);
        cy.get(this.weblocators.txt_name).type(`equipment${randomName}`, {force: true});
    }

    selectDropdownType()
    {
        cy.get(this.weblocators.dd_type).click();
        cy.get(this.weblocators.dd_typeSelect).contains('Forklift').click({force: true});
    }
    enterMaxLoad(maxload)
    {
        cy.get(this.weblocators.txt_maxLoad).type(maxload, {force: true});
    }
    enterShortDescription(shortDescription)
    {
        cy.get(this.weblocators.txt_shortDescription).type(shortDescription, {force: true});
    }

    enterAdditionalComment(additionalComment)
    {
        cy.get(this.weblocators.txt_additionalcomment).type(additionalComment, {force: true});
    }
    clickSaveButton()
    {
        cy.get(this.weblocators.btn_equipmentSave).click({force: true});
    }

    //Bookable
    clickRadioButton()
    {
        cy.get(this.weblocators.toggle_Bookable).first().click({force: true});
    }
    selectPricingModule()
    {
        cy.get(this.weblocators.rd_FreeOfcost).eq(3).click({force: true});
    }
    clickNextButton()
    {
        cy.get(this.weblocators.btn_next).click({force: true});
    }



}