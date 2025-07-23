export class team {
    
    weblocators = {

        //Team Creation
        btn_navigation: '[fusenavbarvertical= "toggleBar"]', 
        btn_teamsNav: '.nav-link-title.ng-star-inserted', 
        btn_team: 'a[data-lang-key="APP_TEAMS.TEAM"]',
        btn_request: '[data-lang-key="APP_TEAMS.REQUEST"]',
        btn_createTeam: '[data-lang-key="APP_TEAMS.CREATE_TEAM"]',
        txt_teamName: '[formcontrolname="TeamName"]',
        dd_discipline: '[formcontrolname="Discipline"]',
        dd_selectDiscipline: 'mat-option[role="option"]',
        txt_teamAlias: '[data-lang-key="APP_TEAMS.TEAM_ALIAS"]',
        txt_address: '[id="google-autoComplete"]',
        txt_address_first: '.pac-item',
        txt_domains: '[data-lang-key="APP_ORGANIZATIONS_MANIPULATION.DOMAIN"]',
        btn_saveTeam: '[data-lang-key="APP_ORGANIZATIONS_MANIPULATION.SAVE"]',

        //Search Team
        btn_searchTeam: '.mat-icon.notranslate.cursor-pointer.material-icons',
        waitForTableData: 'td',
        txt_searchField: '[placeholder="Search"]',

        //Select Team for Team Details
        row_TeamForTeamDetails: 'td[role = "cell"]',

        //invite User button
        btn_inviteUSer: '[data-lang-key="APP_TEAMS.ASSIGN_USER"]',
        txt_inviteEmail: '[formcontrolname="Email"]',
        dd_inviteRoles: '[aria-label="Roles"]',
        dd_chooseRole: '[role ="option"]',
        dd_inviteTEAMname: '[formcontrolname="Team"]',
        dd_teamNameList: '[role="listbox"]',
        btn_sendInvites: '[data-lang-key="APP_TEAMS_INVITES_USER.SEND_INVITES"]',

        //loader
        loader: '.mat-progress-bar-buffer.mat-progress-bar-element',

        //Request Table
        label_NoDataFound: '[data-lang-key="APP_TEAMS.NO_REQUEST_FOUND"]',
        //label_NoDataFound: 'tbody[role="rowgroup"]',
        btn_requestApprove: '[data-lang-key="APP_USER_REQUEST.APPROVE"]',
        btn_requestCancel: '[data-lang-key="APP_USER_REQUEST.CANCEL"]',
        btn_requestReject: '',

        //hover
        row: 'tbody tr[role="row"] [alt="image"]',
        all_row: '[role="row"]',

        //Unassing Confirm
        btn_UnassignConfirm: '[data-lang-key="CONFIRM"]',

        //Toast
        toast_message: '.mdc-snackbar',
        text_label: '[data-lang-key="APP_TEAMS_INVITES_USER.DOMAIN_IS_MATCH_WITH_OTHER_ORG"]',
        //Hover
        hover_mouseover: 'mouseover',
        //Unassign Button
        btn_Unassign: '[data-lang-key="APP_TEAMS.UNASSIGN"]',
        lablel_NoUserFound: '[data-lang-key="APP_TEAMS.NO_USER_FOUND"]',


    }
    constructor()
    {
        this.saveTeam = '';
        this.inviteEmail = '';
    }

    clickNavigationButton()
    {
        //cy.get(this.weblocators.btn_navigation).click();
        cy.visit('/teams')

    }
    navigateTeam()
    {
        cy.get(this.weblocators.btn_teamsNav).contains('Team').click();
    }
    switchUsertoTeam ()
    {
        cy.get(this.weblocators.btn_team).click();
    }
    //USER TO REQUEST TAB
    switchUsertoRequest()
    {
        cy.wait(2000);
        cy.get(this.weblocators.btn_request).click();
    }
    clickCreateTeamButton()
    {
        cy.get(this.weblocators.btn_createTeam).click();
    }

    enterTeamName()
    {
        const randomTeamName = `Team - ${Math.floor(Math.random() *10000)}`;
        cy.get(this.weblocators.txt_teamName).type(randomTeamName);
        this.saveTeam = randomTeamName;
    }

    selectDisciplinefromDropDown()
    {
        cy.get(this.weblocators.dd_discipline).click();
        cy.get(this.weblocators.dd_selectDiscipline).eq(1).click({force: true});

    }

    enterAddress()
    {
        cy.get(this.weblocators.txt_address).type('230');
        cy.get(this.weblocators.txt_address_first).first().click({force: true});
    }

    enterDomain()
    {
        cy.get(this.weblocators.txt_domains).type('maildrop.cc{enter}')
   

    }
    clickSave()
    {
        cy.get(this.weblocators.btn_saveTeam).should('be.visible')
        cy.get(this.weblocators.btn_saveTeam).click({timeout:30000});
    }

    verifyTeamCreationToast()
    {
        cy.get(this.weblocators.toast_message).should('be.visible').contains('Team creation successful');
    }

    clickSearchButtonOnTable()
    {
        cy.get(this.weblocators.waitForTableData).should('be.visible',{timeout: 60000});
        cy.wait(3000);
        cy.get(this.weblocators.loader).should('not.exist',{timeout: 40000});
        // cy.get(this.weblocators.btn_searchTeam).should('be.visible').click({timeout:40000, force: true});
        // cy.wait(3000);
    }
    enterTeamNameforSearch()
    {
        cy.get(this.weblocators.waitForTableData).should('be.visible');
        cy.get(this.weblocators.loader).should('not.exist');
        cy.get(this.weblocators.txt_searchField).eq(0).should('be.visible', {timeout:30000}).type(this.saveTeam);
        

        
    }

    enterSpecificTeamNameforSearch(teamName)
    {
        cy.get(this.weblocators.waitForTableData).should('be.visible');
        cy.get(this.weblocators.loader).should('not.exist');
        cy.get(this.weblocators.txt_searchField).eq(0).should('be.visible', {timeout:30000}).type(teamName);
        

        
    }
    selectTeamForTeamdetails()
    {
        cy.get(this.weblocators.loader).should('not.exist');
        cy.wait(2000);
        cy.get(this.weblocators.row_TeamForTeamDetails).should('be.visible',{timeout: 30000}).eq(0).click();

    }

    clickInviteUser()
    {
        cy.wait(1000)
        cy.get(this.weblocators.btn_inviteUSer).click();
    
    }
    enterInviteEmail()
    {
        const randomNumberEmail = Math.floor(Math.random() * 10000);
        const generatedEmail = `hasnat+${randomNumberEmail}@maildrop.cc`;
        cy.get(this.weblocators.txt_inviteEmail).type(`${generatedEmail}{enter}`);
        // Save to alias for later use in this test
        cy.wrap(generatedEmail).as('inviteEmail');
        // this.inviteEmail = generatedEmail;
        // cy.log(this.inviteEmail)
        
    }

      enterAlreadyInvitedEmail()
    {
        cy.get('@inviteEmail').then((inviteUserEmail)=>{
            cy.get(this.weblocators.txt_inviteEmail).type(inviteUserEmail);

        })
        
        // Save to alias for later use in this test
        
    }
    selectInvieRole()
    {
        cy.wait(2000);
        cy.get(this.weblocators.dd_inviteRoles).click({force: true});
        cy.get(this.weblocators.dd_chooseRole).eq(0).click();
    }
    selectInviteTeam()
    {
        cy.get(this.weblocators.dd_inviteTEAMname).click();
        cy.get(this.weblocators.dd_teamNameList).contains('Team').eq(0).click();
    }
    clickSendInvites()
    {
        cy.get(this.weblocators.btn_sendInvites).click();

    }


    //Request Table 
    checkDataExistRequestTable(callbackIfDataExists) {
        cy.get(this.weblocators.label_NoDataFound).then(($noData) => {
          if ($noData.length > 0 && $noData.is(':visible')) {
            cy.log('No data found.');
          } else {
            cy.get(this.weblocators.waitForTableData).should('be.visible');
            cy.get(this.weblocators.loader).should('not.exist');
            cy.get(this.weblocators.row_TeamForTeamDetails).should('be.visible').eq(1).click()
              .then(() => {
                callbackIfDataExists();
              });
          }
        });
      }
      
    
      

    clickCancel()
    {
        cy.get(this.weblocators.btn_requestCancel).click();
    }


    //Unassign a User

    enterSpecificUserNameforSearchtoUnasssign()
    {
        cy.get(this.weblocators.waitForTableData).should('be.visible');
        cy.get(this.weblocators.loader).should('not.exist');
        cy.get('@inviteEmail').then((email) => {
            cy.get(this.weblocators.txt_searchField).eq(1).should('be.visible',{timeout: 30000})
            .clear().type(email);
            cy.wait(3000);
        
        
        })

        
        
        
    }

      clickUnassignBtn() {
        //locator teamForTeamDetails locate the Cell on the table - Choosing 6 for unassign 

            cy.get(this.weblocators.row_TeamForTeamDetails).eq(6).trigger(this.weblocators.hover_mouseover);
            cy.get(this.weblocators.row_TeamForTeamDetails).eq(6).find(this.weblocators.btn_Unassign).click({force: true});
            cy.get(this.weblocators.btn_UnassignConfirm).click({force: true});
            

      }


      verifyUnassignmentToast() {

        // cy.wait(2000);
        // cy.get(this.weblocators.dd_inviteRoles).click({force: true});
        // cy.get(this.weblocators.text_label)
        //   .should('contain.text', 'User already assigned');

          cy.get(this.weblocators.lablel_NoUserFound)
            .should("be.visible").then(($textlevel)=>{
                const levelNoUserFound = $textlevel.text().replace(/\u00a0/g, ' ').trim();
                expect(levelNoUserFound).to.eq('No user found');
            })


    }
      
      
      
    


    }
      
    
      
   

      
     

