/// <reference types="cypress" />

describe('トップページ', () => {
	it('トップページへアクセスできる', () => {
		cy.visit('http://localhost:3000');
	});

	describe('アコーディオンが開閉できる', () => {
		const getButton = () => cy.get('[role="button"]');
		const getPanel = () => cy.get('[slot="content"]');

		it('アコーディオンが開ける', () => {
			cy.visit('http://localhost:3000');
			cy.wait(1000);

			getButton().click();
			cy.wait(1000);

			getPanel().children().should('have.length', 6);
		});

		it('アコーディオンが閉じられる', () => {
			getButton().click();
			cy.wait(1000);
			getPanel().should('not.exist');
		});
	});
});
