/// <reference types="cypress" />

describe('hoge', () => {
	it('トップページへアクセスできる', () => {
		cy.visit('http://localhost:3000');
		cy.wait(1000);

		const button = cy.get('[role="button"]');
		button.click();
		cy.wait(1000);

		const panel = cy.get('[slot="content"]');
		console.log(panel);

		panel.children().should('have.length', 6);
	});
});
