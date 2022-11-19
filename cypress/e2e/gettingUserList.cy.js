const envVariable = require('../fixtures/envVariable.json');
// const userList = require('../fixtures/userList.json')
// const fs = require('fs-extra');

describe("Getting User List", () => {
    it("User list", () => {
        cy.request({
            method: 'GET',
            url: envVariable.baseURL + '/user/list',
            headers: {
                'Authorization': envVariable.token
            }
        }).then((response) => {
            expect(response.status).eq(200);
            cy.log(response.body);
            cy.writeFile('cypress/fixtures/userList.json', response.body);
            //will research later
            //cy.writeFile('cypress/fixtures/userList.json', response.body);
        })
    })
})