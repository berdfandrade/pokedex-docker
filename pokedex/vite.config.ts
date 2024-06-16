import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Escuta em todas as interfaces dentro do contêiner Docker
    origin: 'http://localhost:5173', // Endereço exposto do servidor dentro do contêiner Docker
  },
});