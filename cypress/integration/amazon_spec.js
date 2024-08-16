describe('Amazon Ecommerce Tests', () => {
    // Prueba 1 de Búsqueda de Productos en Desktop
    it('Should search for a product and display relevant results', () => {
    // utilizo `visitAndCheck` para asegura que se acceda al dominio correcto, debido a redirecciones dinámicas por geolocalización de Amazon.
      cy.visitAndCheck('/', '#twotabsearchtextbox');
      cy.get('#twotabsearchtextbox').type('Laptop{enter}');
      cy.url().should('include', 'k=Laptop');
      cy.get('.s-main-slot').should('contain', 'Laptop');
    });
  
    // Prueba 2 de Selección de Ordenación en Desktop
    it('Should sort search results by price from high to low', () => {
    // Utilizo `visitAndCheck` para asegura que se acceda al dominio correcto, debido a redirecciones dinámicas por geolocalización de Amazon.
      cy.visitAndCheck('https://www.amazon.com/s?k=Laptop', '.a-dropdown-prompt');
      cy.get('.a-dropdown-prompt').click();
      cy.get('.a-dropdown-item').contains('Price: High to Low').click();
      
      // Verificar que la URL se actualiza correctamente para reflejar el orden de precio de mayor a menor
      cy.url().should('include', 's=price-desc-rank');
    });
  
    // Prueba 3 de Agregar al Carrito en Desktop
    it('Should add a product to the cart', () => {
    // Utilizo `visitAndCheck` para asegura que se acceda al dominio correcto, debido a redirecciones dinámicas por geolocalización de Amazon.
      cy.visitAndCheck('https://www.amazon.com/s?k=Laptop', '.s-main-slot .s-result-item[data-component-type="s-search-result"]');
      
      // Seleccionar el primer producto
      cy.get('.s-main-slot .s-result-item[data-component-type="s-search-result"]').first().find('h2 a').click();
      cy.get('#add-to-cart-button').click();
      cy.get('#nav-cart-count').should('contain', '1');
    });
  });  
  