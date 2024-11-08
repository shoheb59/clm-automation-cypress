import { team } from "../../pages/teamPage";
import { loginPage } from "../../pages/loginPage";
import { siteSearchandSelect } from "../../pages/siteSearchandSelectPage";
//import loginData from '../../fixtures/loginData.json';
import loginData from '../../fixtures/loginDataStage.json';

const loginObj  = new loginPage();
const siteSelectionOBJ =  new siteSearchandSelect();
const teamOBJ = new team();

describe('Team Test Case', () => {


    beforeEach(() => {
      loginObj.openURL();
      loginObj.enterEmail(loginData.email);
      loginObj.enterPassword(loginData.password);
      loginObj.selectEnglishButton();
      loginObj.btnsubmit();
      loginObj.verifyUrls();
      cy.wait(10000);
      loginObj.handleModal()
        // Continue with site selection only after modal handling is complete
      
   

      //site selection

    siteSelectionOBJ.clickDropDown();
    siteSelectionOBJ.typeSite('Testfeld 2+');
    siteSelectionOBJ.selectSitefromSearch();

    });

    it('TC 1: Verify that User Can Create A TEAM', () =>{
        teamOBJ.clickNavigationButton();
        teamOBJ.navigateTeam();
        teamOBJ.switchUsertoTeam();
        teamOBJ.clickCreateTeamButton();
        teamOBJ.enterTeamName();
        teamOBJ.selectDisciplinefromDropDown();
        teamOBJ.enterDomain();
        teamOBJ.clickSave();
        
      

    })

    it('TC 2: Verify That User Can Search A team On Team Table', ()=>{
      teamOBJ.clickNavigationButton();
      teamOBJ.navigateTeam();
      teamOBJ.switchUsertoTeam();
      teamOBJ.clickSearchButtonOnTable();
      teamOBJ.enterTeamNameforSearch();
      teamOBJ.selectTeamForTeamdetails();
      teamOBJ.clickInviteUser();

    })

    it('TC 3: Verify that User Can invite a USER from Team Details', ()=>{
      teamOBJ.clickNavigationButton();
      teamOBJ.navigateTeam();
      teamOBJ.switchUsertoTeam();
      teamOBJ.clickSearchButtonOnTable();
      teamOBJ.enterTeamNameforSearch();
      teamOBJ.selectTeamForTeamdetails();
      teamOBJ.clickInviteUser();
      teamOBJ.enterInviteEmail();
      teamOBJ.selectInviteTeam();
      teamOBJ.selectInvieRole();
    })

    it('TC 4: Verify that User Can Send Invites from USER table', ()=> {
      teamOBJ.clickNavigationButton();
      teamOBJ.navigateTeam();
      teamOBJ.clickInviteUser();
      teamOBJ.enterInviteEmail();
      teamOBJ.selectInviteTeam();
      teamOBJ.selectInvieRole();

    })
    it('TC 5: Verfy that user Can Accept/Cancel Request from Request Tab', ()=>{
      teamOBJ.clickNavigationButton();
      teamOBJ.navigateTeam();
      teamOBJ.switchUsertoRequest();
      teamOBJ.checkDataExistRequestTable();
      teamOBJ.clickCancel();

    })
    after(() => {
      // Ensure all Allure messages are handled and flushed to the allure-results directory
      cy.task('reportAllureCypressSpecMessages').then(() => {
        cy.log('Allure messages flushed successfully');
      });
    });
});