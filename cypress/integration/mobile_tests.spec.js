describe('Mobile E-commerce Tests', () => {

    beforeEach(() => {
      // Configura la vista para un dispositivo móvil, por ejemplo, iPhone X
      cy.viewport('iphone-x');
    });
  
    // Test 1: Verificación de la Barra de Navegación en Móvil
    // Objetivo: Verificar que la barra de navegación esté visible y que el menú de navegación se despliegue correctamente en la vista móvil.
    it('Should display the mobile navigation bar and open menu', () => {
      cy.visitAndCheck('/', '#nav-hamburger-menu');
      cy.get('#nav-hamburger-menu').should('be.visible').click();
      cy.get('.hmenu-visible').should('be.visible');
    });
  
    // Test 2: Búsqueda de Productos y Verificación de Resultados
    // Objetivo: Asegurarse de que la funcionalidad de búsqueda de productos funciona correctamente en la vista móvil.
    it('Should search for a product and display results', () => {
      cy.visitAndCheck('/', '#nav-search-bar-form');
      cy.get('#nav-search-bar-form').should('be.visible');
      cy.get('#twotabsearchtextbox').type('laptop{enter}');
      cy.get('.s-main-slot .s-result-item').should('have.length.at.least', 1);
    });
  
    // Test 3: Verificación del Carrito de Compras en Móvil
    // Objetivo: Verificar que un usuario pueda añadir un producto al carrito en la vista móvil y que el carrito se actualice correctamente.
    it('Should add an item to the cart and verify', () => {
      cy.visitAndCheck('/', '#twotabsearchtextbox');
      cy.get('#twotabsearchtextbox').type('laptop{enter}');
      cy.get('.s-main-slot .s-result-item[data-component-type="s-search-result"]').first().find('img').click();
      cy.get('#add-to-cart-button').should('be.visible').click();
      cy.get('#nav-cart-count').should('contain', '1');
    });
  
  });  
  
  