import { team } from "../../pages/teamPage";
import { loginPage } from "../../pages/loginPage";
import { siteSearchandSelect } from "../../pages/siteSearchandSelectPage";
import loginData from '../../fixtures/loginData.json';

const loginObj  = new loginPage();
const siteSelectionOBJ =  new siteSearchandSelect();
const teamOBJ = new team();

describe('Team test', () => {


    before(() => {
      loginObj.openURL();
      loginObj.enterEmail(loginData.email);
      loginObj.enterPassword(loginData.password);
      loginObj.selectEnglishButton();
      loginObj.btnsubmit();
      loginObj.verifyUrls();
      loginObj.handleModal();

      //site selection

    siteSelectionOBJ.clickDropDown();
    siteSelectionOBJ.typeSite('Z- Site');
    siteSelectionOBJ.selectSitefromSearch();

    });

    it('Create A TEAM', () =>{
        teamOBJ.clickNavigationButton();
        teamOBJ.navigateTeam();
        teamOBJ.switchUsertoTeam();
        teamOBJ.clickCreateTeamButton();
        teamOBJ.enterTeamName();
        teamOBJ.selectDisciplinefromDropDown();
        teamOBJ.enterDomain();
        teamOBJ.clickSave();
        
      

    })

    it('Search A team On Team Table', ()=>{
      teamOBJ.clickNavigationButton();
      teamOBJ.navigateTeam();
      teamOBJ.switchUsertoTeam();
      teamOBJ.clickSearchButtonOnTable();
      teamOBJ.enterTeamNameforSearch();
      teamOBJ.selectTeamForTeamdetails();
      teamOBJ.clickInviteUser();

    })

    it('invite a USER from Team Details', ()=>{
      teamOBJ.clickNavigationButton();
      teamOBJ.navigateTeam();
      teamOBJ.switchUsertoTeam();
      teamOBJ.clickSearchButtonOnTable();
      teamOBJ.enterTeamNameforSearch();
      teamOBJ.selectTeamForTeamdetails();
      teamOBJ.clickInviteUser();
      teamOBJ.enterInviteEmail();
      teamOBJ.selectInvieRole();
    })

    it.only('Send Invites from USER table', ()=> {
      teamOBJ.clickNavigationButton();
      teamOBJ.navigateTeam();
      teamOBJ.clickInviteUser();
      teamOBJ.enterInviteEmail();
      teamOBJ.selectInviteTeam();
      teamOBJ.selectInvieRole();

    })
});