export class siteSearchandSelect {

weblocators = {
  
    dd_siteOpen: '[id="site-selector"]',
    dd_search: '[placeholder="Search"]',
    selectSite: 'button[role = "menuitem"]'


}

clickDropDown ()
{
    cy.get(this.weblocators.dd_siteOpen).click({force: true});
}
typeSite(site)
{
    cy.get(this.weblocators.dd_search).eq(1).type(site, {force: true});
}
selectSitefromSearch()
{
    cy.get(this.weblocators.selectSite).eq(0).click({force: true, timeout: 10000});
    cy.wait(1000);
    cy.get('body').click(0, 0); 
}





}