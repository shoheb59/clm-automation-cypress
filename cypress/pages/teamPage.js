export class team {
    
    weblocators = {

        //Team Creation
        btn_navigation: '[fusenavbarvertical= "toggleBar"]', 
        btn_teamsNav: '.nav-link-title.ng-star-inserted', 
        btn_team: 'a[data-lang-key="APP_TEAMS.TEAM"]',
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
    clickCreateTeamButton()
    {
        cy.get(this.weblocators.btn_createTeam).click();
    }

    enterTeamName()
    {
        const randomTeamName = Math.floor(Math.random() *100);
        cy.get(this.weblocators.txt_teamName).type(`Team - ${randomTeamName}`)
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
        cy.get(this.weblocators.btn_saveTeam).click();
    }

    clickSearchButtonOnTable()
    {
        cy.get(this.weblocators.waitForTableData).should('be.visible');
        cy.get(this.weblocators.btn_searchTeam).should('be.visible').click({timeout:4000, force: true});
        cy.wait(3000);
    }
    enterTeamNameforSearch()
    {
        cy.get(this.weblocators.waitForTableData).should('be.visible');
        cy.get(this.weblocators.loader).should('not.exist');
        cy.get(this.weblocators.txt_searchField).eq(0).should('be.visible', {timeout:5000}).type('team + 4{enter}');
        cy.get(this.weblocators.loader).should('not.be.visible');

        
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
        cy.get(this.weblocators.dd_inviteRoles).click();
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






}