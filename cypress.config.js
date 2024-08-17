const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {    
    },
    specPattern: 'cypress/integration/**/*.{js,jsx,ts,tsx}',
    baseUrl: 'https://www.rappi.com',

    // Configuración para habilitar videos
    video: true,
    videoCompression: 32,
    videosFolder: 'cypress/videos',
  },

    // Configuración del reporte
    reporter: 'mochawesome',
    reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'report',
    timestamp: 'yyyy-mm-dd-HH-MM-ss',
  },
});

