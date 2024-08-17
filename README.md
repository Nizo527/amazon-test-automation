# Pruebas Automatizadas para Rappi

Este repositorio contiene pruebas automatizadas para la plataforma Rappi, cubriendo tanto la versión de escritorio como la versión móvil. Las pruebas se realizan utilizando Cypress para garantizar la funcionalidad de búsqueda de productos, filtrado de resultados y visualización de detalles del producto.

## Contenido del Repositorio

- **`cypress/`**: Carpeta que contiene los archivos relacionados con las pruebas.
  - **`integration/`**: Archivos de pruebas (`.js`) para las versiones de escritorio y móvil.
  - **`videos/`**: Videos grabados durante la ejecución de las pruebas.
  - **`reports/`**: Reportes generados por Mochawesome.
- **`cypress.config.js`**: Configuración de Cypress, incluyendo la URL base, opciones de video y configuración de reportes.
- **`package.json`**: Dependencias y scripts para ejecutar las pruebas.
- **`README.md`**: Este archivo con la descripción del proyecto y la guía para ejecutar las pruebas.

## Metodología de Pruebas

Las pruebas se configuran y ejecutan de la siguiente manera:

1. **Configuración del Entorno:**
   - Manejo de excepciones relacionadas con `Cache.addAll`.
   - Establecimiento de la URL base en `https://www.rappi.com`.
   - Habilitación de videos y reportes con Mochawesome.

2. **Ejecución de las Pruebas:**
   - **Escritorio:** Pruebas en la versión de escritorio de Rappi.
   - **Móvil:** Pruebas simulando un dispositivo iPhone 6.

## Cómo Ejecutar las Pruebas

1. **Clonar el Repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git
   cd nombre-del-repositorio

**Instalar Dependencias:**
npm install

**Ejecutar las Pruebas:**
npx cypress open

**Selecciona las pruebas de escritorio o móvil según sea necesario.**

**Evidencias**
Videos de Pruebas: Se encuentran en la carpeta cypress/videos/.

Video 1 - Pruebas de Escritorio: Captura las pruebas en la versión de escritorio.
Video 2 - Pruebas de Móvil: Muestra las pruebas en la versión móvil.
Reportes de Mochawesome: Se encuentran en la carpeta cypress/reports/.

Reporte de Pruebas de Escritorio: Resumen de las pruebas de escritorio.
Reporte de Pruebas de Móvil: Resumen de las pruebas móviles.
