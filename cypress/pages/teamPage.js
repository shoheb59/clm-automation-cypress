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
        dd_selectDiscipline: '.mat-option-text',
        txt_teamAlias: '[data-lang-key="APP_TEAMS.TEAM_ALIAS"]',
        txt_domains: '[data-lang-key="APP_ORGANIZATIONS_MANIPULATION.DOMAIN"]',
        btn_saveTeam: '[data-lang-key="APP_ORGANIZATIONS_MANIPULATION.SAVE"]',

        //Search Team
        btn_searchTeam: '.mat-icon.notranslate.cursor-pointer.material-icons',
        waitForTableData: 'td',
        txt_searchField: '[data-placeholder="Search"]',

        //Select Team for Team Details
        row_TeamForTeamDetails: 'td[role = "cell"]',

        //invite User button
        btn_inviteUSer: '[data-lang-key="APP_TEAMS.ASSIGN_USER"]',
        txt_inviteEmail: '[formcontrolname="Email"]',
        dd_inviteRoles: '[data-placeholder="Roles"]',
        dd_chooseRole: '[role ="option"]',
        dd_inviteTEAMname: '[formcontrolname="Team"]',
        dd_teamNameList: '[role="listbox"]',
        btn_sendInvites: '[data-lang-key="APP_TEAMS_INVITES_USER.SEND_INVITES"]',

        //loader
        loader: '.mat-progress-bar-buffer.mat-progress-bar-element',

        //Request Table
        label_NoDataFound: 'tbody[role="rowgroup"]',
        btn_requestApprove: '[data-lang-key="APP_USER_REQUEST.APPROVE"]',
        btn_requestCancel: '[data-lang-key="APP_USER_REQUEST.CANCEL"]',
        btn_requestReject: ''


    }
    constructor()
    {
        this.saveTeam = '';
    }

    clickNavigationButton()
    {
        cy.get(this.weblocators.btn_navigation).click();
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
        const randomTeamName = `Team - ${Math.floor(Math.random() *1000)}`;
        cy.get(this.weblocators.txt_teamName).type(randomTeamName);
        this.saveTeam = randomTeamName;
    }

    selectDisciplinefromDropDown()
    {
        cy.get(this.weblocators.dd_discipline).click();
        cy.get(this.weblocators.dd_selectDiscipline).eq(1).click({force: true});

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
    selectTeamForTeamdetails()
    {
        cy.get(this.weblocators.loader).should('not.exist');
        cy.get(this.weblocators.row_TeamForTeamDetails).should('be.visible').eq(0).click();    


    }

    clickInviteUser()
    {
        cy.get(this.weblocators.btn_inviteUSer).click();
    
    }
    enterInviteEmail()
    {
        const randomNumberEmail = Math.floor(Math.random() *1000);
        cy.get(this.weblocators.txt_inviteEmail).type(`hasnat+${randomNumberEmail}@maildrop.cc`)
    }
    selectInvieRole()
    {
        cy.get(this.weblocators.dd_inviteRoles).click({force: true});
        cy.get(this.weblocators.dd_chooseRole).eq(1).click();
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
    checkDataExistRequestTable() {
        cy.get(this.weblocators.label_NoDataFound).then(($element) => {
            if ($element.length < 0) {
                print('not found')
            } else {
                cy.get(this.weblocators.waitForTableData).should('be.visible');
                cy.get(this.weblocators.loader).should('not.exist');
                //Row_teamforteamdetails Weblocator can find any row in the table
                cy.get(this.weblocators.row_TeamForTeamDetails).should('be.visible').eq(0).click(); 

                
            }
        });
    }

    clickCancel()
    {
        cy.get(this.weblocators.btn_requestCancel).click();
    }
    






}