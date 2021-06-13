/// <reference types="cypress" />

it('google test', function() {
    cy.visit('https://www.google.com')
    cy.get('.gLFyf').type('Fuad Najibullah')    // jika dengan enter ==> cy.get('.gLFyf').type('Fuad Najibullah{enter}')
    cy.get('.FPdoLc > center > .gNO89b').click()    // jika dengan click, maka ketik code ini.
    cy.wait(7000)   // hard code untuk delay/menunggu sebanyak ms yang diinginkan.
    cy.contains('News').click() // jika tidak dengan class, melainkan dengan konteks text pada element tsb.

})