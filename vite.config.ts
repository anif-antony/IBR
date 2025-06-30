import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Base path for deployment. '/' is fine for root-level hosting.
  plugins: [react()], // Enables React plugin support (JSX, Fast Refresh, etc.)
  optimizeDeps: {
    exclude: ['lucide-react'], // Prevents pre-bundling of 'lucide-react'
  },
});
