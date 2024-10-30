export class siteSearchandSelect {

weblocators = {
  
    dd_siteOpen: '[id="site-selector"]',
    dd_search: '[placeholder="Search"]',
    selectSite: 'button[role = "menuitem"]'


}

clickDropDown ()
{
    cy.get(this.weblocators.dd_siteOpen).click();
}
typeSite(site)
{
    cy.get(this.weblocators.dd_search).type(site);
}
selectSitefromSearch()
{
    cy.get(this.weblocators.selectSite).first().click()
}





}