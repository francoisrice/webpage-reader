/// <reference types="Cypress" />

describe('The Backend', () => {
	it('successfully loads', () => {
		cy.request('/');
	});

	it('retrieves data from /generate_speech', () => {
		cy.request('POST', '/api/generate_speech', {
			placeholder: 'data',
		});
	});
});
