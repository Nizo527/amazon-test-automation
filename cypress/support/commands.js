Cypress.Commands.add('visitAndCheck', (url, selector, maxRetries = 3) => {
    const checkElement = (retries) => {
      // Verificar que la URL responda correctamente
      cy.request({
        url: url,
        failOnStatusCode: false
      }).then((response) => {
        if (response.status === 200) {
          cy.visit(url);
          cy.get(selector, { timeout: 10000 }).should('be.visible');
        } else if (retries > 0) {
          cy.log(`Retrying... ${retries} attempts left`);
          checkElement(retries - 1); // Retry
        } else {
          // Fallar el test si no se encuentra el selector después de los reintentos
          throw new Error(`Failed to find ${selector} after ${maxRetries} attempts.`);
        }
      });
    };
  
    checkElement(maxRetries);
  });  