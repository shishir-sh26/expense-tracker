import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // ------------------------------------------------------------------
  //  CRITICAL FIX: Add the base property for GitHub Pages deployment
  //  Replace 'repository-name' with your actual repo name (expense-tracker)
  // ------------------------------------------------------------------
  base: '/expense-tracker/', 
  // ------------------------------------------------------------------
})