const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementar los eventos de nodo aquí si es necesario
    },
    // Configura la carpeta donde Cypress buscará los archivos de prueba
    specPattern: 'cypress/integration/**/*.{js,jsx,ts,tsx}',
    // Define la URL base si es necesario
    baseUrl: 'https://www.amazon.com',
  },
});
