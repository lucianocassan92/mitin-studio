import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: [
      {
        // Alias @ to the src directory
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
      {
        // Map Figma-exported asset imports to local assets folder
        find: /^figma:asset\//,
        replacement: `${path.resolve(__dirname, './src/assets')}/`,
      },
    ],
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        treatmentsEs: path.resolve(__dirname, 'tratamientos.html'),
        homeEn: path.resolve(__dirname, 'en.html'),
        treatmentsEn: path.resolve(__dirname, 'en-treatments.html'),
        cookieEs: path.resolve(__dirname, 'politica-cookies.html'),
        cookieEn: path.resolve(__dirname, 'en-cookie-policy.html'),
        balayageEs: path.resolve(__dirname, 'balayage-barcelona.html'),
        colorEs: path.resolve(__dirname, 'coloracion-barcelona.html'),
        cutEs: path.resolve(__dirname, 'corte-pelo-barcelona.html'),
        highlightsEs: path.resolve(__dirname, 'mechas-barcelona.html'),
      },
    },
  },
})
