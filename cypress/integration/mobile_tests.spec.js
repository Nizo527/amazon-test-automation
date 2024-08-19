describe('Rappi Ecommerce Tests for Mobile', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('Cache.addAll')) {
                return false;
            }
            return true;
        });

        cy.visit('/'); // Navega a la página principal de Rappi antes de cada prueba
    });

    // Prueba 1 de Búsqueda de Productos en Móvil
    it('Should search for a product and display relevant results', () => {
        cy.get('#input').type('Pizza{enter}'); // Busca 'Pizza' en la barra de búsqueda y presiona Enter
        cy.url().should('include', 'search?query=Pizza'); // Verifica que la URL contenga el término de búsqueda 'Pizza'
        cy.contains('Pizza').should('be.visible'); // Verifica que el término 'Pizza' sea visible en los resultados
    });

    // Prueba 2 de Filtrado de Productos por Categoría en Móvil
    it('Should filter search results by category', () => {
        cy.get('#input').type('Pizza{enter}'); // Busca 'Pizza' en la barra de búsqueda y presiona Enter
        cy.get('#order-dropdown').click(); // Abre el menú de filtros
        cy.get('[data-testid="typography"]').contains('Costo de envío').click(); // Selecciona el filtro 'Costo de envío'
        
        // Verifica que el filtro de 'Costo de envío' se haya aplicado correctamente
        cy.get('.sc-dcJsrY.hdeavw').should('contain', 'Costo de envío');   
    });

    // Prueba 3 Visualización de Detalles del Producto en Móvil
    it('Should view product details from search results', () => {
        cy.get('#input').type('Pizza{enter}'); // Busca 'Pizza' en la barra de búsqueda y presiona Enter        
        cy.get('body').click(0, 0); // Hacer clic en un lugar fuera del modal si hay uno visible
        cy.get('.embla__slide').find('button').first().scrollIntoView().wait(500).click({ force: true });
        // Selecciona el primer producto en la lista de resultados
        cy.get('[data-qa="modal"]').should('be.visible'); // Verifica que la ventana emergente con los detalles del producto sea visible
    });
});

  
  