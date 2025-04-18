export class material {

    weblocators = {
        btn_navigation: '[fusenavbarvertical= "toggleBar"]',  
        btn_materialManagement: '.nav-link-title.ng-star-inserted',
        btn_addMaterial: '[data-lang-key="APP_MATERIALS.ADD_MATERIAL"]',
        txtlvl_Present: '[data-lang-key="APP_MATERIALS.MATERIAL_INFORMATION"]',
        txt_materialName: '[formcontrolname="MaterialName"]',
        dd_unit: '.mat-mdc-select-arrow-wrapper',
        dd_unitBundleOfPipes: '[role="option"]',
        txt_length: '[name="length"]',
        txt_width: '[formcontrolname="Width"]',
        dd_team: '[formcontrolname="Team"]',
        dd_selectFirstOption: '[role="option"]:first-of-type',
        txt_description: '[formcontrolname="MaterialDescription"]',
        btn_save: '[type="submit"]',

        //Delete Material 

        row: '[role="row"]',
        first_column: 'td.cdk-column-MaterialName',
        btn_delete: '[data-lang-key="APP_MATERIALS.DELETE"]',
        btn_keepIt: '[data-lang-key="APP_MATERIALS.CANCEL"]',
        searchIcon: '.mat-sort-header-content > .mat-icon',
        filterValue: '.cdk-column-MaterialName_filter'




    }

    clickNavigationButton()
    {
        cy.get(this.weblocators.btn_navigation).click();
    }
    navigateMaterial()
    {
        cy.get(this.weblocators.btn_materialManagement).contains('Material Management').click();
    }
    // verifyMaterialInfoPage()
    // {
    //     cy.get(this.weblocators.txtlvl_Present).should('have.text', 'Material Information');
    // }
    clickCreateMaterial()
    {
        cy.get(this.weblocators.btn_addMaterial).click()
    }
    enterMaterialName(materialname)
    {
        const randomFourDigitInteger = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        cy.get(this.weblocators.txt_materialName).type(`${materialname} ${randomFourDigitInteger}`)
    }
    selectUnit()
    {
        
        //cy.get(this.weblocators.dd_unit).click();
        cy.get(this.weblocators.dd_unit).click({setTimeout: 3000}, {force: true});
        cy.get(this.weblocators.dd_unit).should('be.visible');
        cy.get(this.weblocators.dd_unitBundleOfPipes).eq(5).click({force: true});
        

    }
    enterLength()
    {
        cy.get(this.weblocators.txt_length).type('80');
    }
    enterWidth(){
        cy.get(this.weblocators.txt_width).type('50');
    }
    selectTeam()
    {
        cy.get(this.weblocators.dd_team).click();
        cy.get(this.weblocators.dd_selectFirstOption).click();
    }

    typeDescription(description)
    {
        cy.get(this.weblocators.txt_description).type(description);
    }
    clickSaveButton()
    {
        cy.get(this.weblocators.btn_save).click();
    }


    //------------Delete or Keep--------------

//collect the first value in the matrial name column
collectMaterialName (callback)
{
    cy.get(this.weblocators.row).then(rows =>{
        if(rows.length >0){
            cy.get(this.weblocators.first_column).eq(1).then($column =>{
                const materialName = $column.text().trim();
                callback(materialName);
            })
        }
    })
}
hoeverRow()
{
    cy.get(this.weblocators.row).eq(2).trigger('mouseover');
}

deleteorKeepRow()
{
    cy.get(this.weblocators.row).eq(2).find(this.weblocators.btn_delete).click({force: true});
    //Keep it
    cy.get(this.weblocators.btn_keepIt).click();


}
//Search icon remain open as deafult 
clickSearchIcon()
{
    cy.get(this.weblocators.searchIcon).click();
}
typeValue(materialName)
{
    cy.get(this.weblocators.filterValue).type(materialName)
}


}