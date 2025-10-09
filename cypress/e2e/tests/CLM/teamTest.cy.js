import { team } from "../../../pages/CLM/teamPage";
import { loginPage } from "../../../pages/loginPage";
import { siteSearchandSelect } from "../../../pages/CLM/siteSearchandSelectPage";
//import loginData from '../../fixtures/loginData.json';
import loginData from '../../../fixtures/loginDataDev.json';
//import loginData from '../../../fixtures/loginDataStage.json';

const loginObj  = new loginPage();
const teamOBJ = new team();

describe('Team Test Case', () => {


    beforeEach(() => {
      cy.session('login', () => {
      
        cy.LoginWithCurrentUrlAndSelectSite();
      })
   

    });

    it('TC 1: Verify that User Can Create A TEAM', () =>{
        teamOBJ.clickNavigationButton();
        loginObj.handleModal(); 
        //teamOBJ.navigateTeam();
        teamOBJ.switchUsertoTeam();
        teamOBJ.clickCreateTeamButton();
        teamOBJ.enterTeamName();
        teamOBJ.selectDisciplinefromDropDown();
        teamOBJ.enterAddress();
        teamOBJ.enterDomain();
        teamOBJ.clickSave();
        //teamOBJ.verifyTeamCreationToast();
        
      

    })


    it.only('TC 1: Verify that User Can Create A TEAM', () =>{
        teamOBJ.clickNavigationButton();
        loginObj.handleModal(); 
        //teamOBJ.navigateTeam();
        teamOBJ.switchUsertoTeam();
        for(let i = 1; i < 10; i++)
        {

        teamOBJ.clickCreateTeamButton();
        teamOBJ.enterTeamName();
        teamOBJ.selectDisciplinefromDropDown();
        teamOBJ.enterAddress();
        teamOBJ.enterDomain();
        teamOBJ.clickSave();
        
        cy.wait(4000);
        //teamOBJ.verifyTeamCreationToast();

        
        }

    })

    it('TC 2: Verify That User Can Search the newly created team On Team Table', ()=>{
      teamOBJ.clickNavigationButton();
      loginObj.handleModal(); 
      //teamOBJ.navigateTeam();
      teamOBJ.switchUsertoTeam();
      teamOBJ.clickSearchButtonOnTable();
      teamOBJ.enterTeamNameforSearch();
      teamOBJ.selectTeamForTeamdetails();
      teamOBJ.clickInviteUser();

    })

    it('TC 3: Verify that User Can invite a USER from Team Details of New Contractor Team', ()=>{     //need to run frist Case to crate team
      teamOBJ.clickNavigationButton();
      loginObj.handleModal(); 
      //teamOBJ.navigateTeam();
      teamOBJ.switchUsertoTeam();
      teamOBJ.clickSearchButtonOnTable();
      teamOBJ.enterTeamNameforSearch();
      teamOBJ.selectTeamForTeamdetails();
      teamOBJ.clickInviteUser();
      teamOBJ.enterInviteEmail();
      teamOBJ.selectInvieRole();
      teamOBJ.clickSendInvites();
    })
    it('TC 4: Verify that user can send invities from Project Manager Team',()=>{

      teamOBJ.clickNavigationButton();
      loginObj.handleModal(); 
      //teamOBJ.navigateTeam();
      teamOBJ.switchUsertoTeam();
      teamOBJ.clickSearchButtonOnTable();
      teamOBJ.enterSpecificTeamNameforSearch('Project Manager');
      teamOBJ.selectTeamForTeamdetails();
      teamOBJ.clickInviteUser();
      teamOBJ.enterInviteEmail();
      teamOBJ.selectInvieRole();
      teamOBJ.clickSendInvites();


    })
    it('TC 5: Verify that user can send invities from Project Planner Team',()=>{
      teamOBJ.clickNavigationButton();
      loginObj.handleModal(); 
      //teamOBJ.navigateTeam();
      teamOBJ.switchUsertoTeam();
      teamOBJ.clickSearchButtonOnTable();
      teamOBJ.enterSpecificTeamNameforSearch('Project Planer');
      teamOBJ.selectTeamForTeamdetails();
      teamOBJ.clickInviteUser();
      teamOBJ.enterInviteEmail();
      teamOBJ.selectInvieRole();
      teamOBJ.clickSendInvites();

    })

    it('TC 6: Verify that user can send invities from Site Manager Team',()=>{
      teamOBJ.clickNavigationButton();
      loginObj.handleModal(); 
      //teamOBJ.navigateTeam();
      teamOBJ.switchUsertoTeam();
      teamOBJ.clickSearchButtonOnTable();
      teamOBJ.enterSpecificTeamNameforSearch('Logistik Manager Team');
      teamOBJ.selectTeamForTeamdetails();
      teamOBJ.clickInviteUser();
      teamOBJ.enterInviteEmail();
      teamOBJ.selectInvieRole();
      teamOBJ.clickSendInvites();

    })

    
    it('TC 7: Verify that User Can Send Invites from USER table', ()=> {
      
        teamOBJ.clickNavigationButton();
        loginObj.handleModal(); 
        //teamOBJ.navigateTeam();
        teamOBJ.clickInviteUser();
        teamOBJ.enterInviteEmail();
        teamOBJ.selectInviteTeam();
        teamOBJ.selectInvieRole();
        teamOBJ.clickSendInvites();
    

    })
    it('TC 8: Verfy that user Can Accept/Cancel Request from Request Tab', ()=>{
      teamOBJ.clickNavigationButton();
      loginObj.handleModal(); 
      //teamOBJ.navigateTeam();
      teamOBJ.switchUsertoRequest();
      teamOBJ.checkDataExistRequestTable();
      teamOBJ.checkDataExistRequestTable(() => {
      teamOBJ.clickCancel();
      });
      

    })

    it('TC 9: Verfy that user Can Unassing an Inactive User', ()=>{
      teamOBJ.clickNavigationButton();
      loginObj.handleModal(); 
      //teamOBJ.navigateTeam();
      teamOBJ.switchUsertoTeam();
      teamOBJ.clickSearchButtonOnTable();
      teamOBJ.enterSpecificTeamNameforSearch('Logistik Manager Team');
      teamOBJ.selectTeamForTeamdetails();
      teamOBJ.clickInviteUser();
      teamOBJ.enterInviteEmail();
      teamOBJ.selectInvieRole();
      teamOBJ.clickSendInvites();
      teamOBJ.enterSpecificUserNameforSearchtoUnasssign();

      teamOBJ.clickUnassignBtn();
      teamOBJ.verifyUnassignmentToast();


    })


    it('TC 10: Verfy that user should not able to send duplicate invitation', ()=>{
     teamOBJ.clickNavigationButton();
     loginObj.handleModal(); 
      //teamOBJ.navigateTeam();
      teamOBJ.switchUsertoTeam();
      teamOBJ.clickSearchButtonOnTable();
      teamOBJ.enterSpecificTeamNameforSearch('Logistik Manager Team');
      teamOBJ.selectTeamForTeamdetails();
      teamOBJ.clickInviteUser();
      teamOBJ.enterInviteEmail();
      teamOBJ.selectInvieRole();
      teamOBJ.clickSendInvites();
      //teamOBJ.enterSpecificUserNameforSearchtoUnasssign();

      //teamOBJ.clickUnassignBtn()
      
      //need to fix  the invite user, should have to create another function for the invite same user again
      teamOBJ.clickInviteUser();
      teamOBJ.enterAlreadyInvitedEmail();

      teamOBJ.verifyUnassignmentToast();


    })

});