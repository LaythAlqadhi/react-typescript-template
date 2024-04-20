import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';

interface MyConfig extends UserConfig {
  test?: {
    globals: boolean;
    environment: string;
    setupFiles: string;
  };
}

// https://vitejs.dev/config/
const config: MyConfig = {
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './testSetup.ts',
  },
  server: {
    host: '0.0.0.0',
  }
};

export default defineConfig(config);
