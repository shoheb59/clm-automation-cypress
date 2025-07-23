const overviewlocator = 
{
    allSchedule: '.zoneSchedul__boxWrapper__box',
    editSchedule: '.edit-zoneSchedule',
    allVehicle: '.truckInfo__boxWrapper__box',
    editVehicle: '.editTruckInfo',
}

Cypress.Commands.add('HoveAllElementandEdit', (allDataForEdit,editButton) => {
    cy.get(allDataForEdit).then($elements => {
        if ($elements.length > 0) {
        const randomIndex = Math.floor(Math.random() * $elements.length);
        cy.wrap($elements[randomIndex]).trigger('mouseover');
        cy.get(allDataForEdit).eq(randomIndex).find(editButton).click({force: true});
        }
    });
    });