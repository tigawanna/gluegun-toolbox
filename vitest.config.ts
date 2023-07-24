import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
      globals: true,
      exclude: [
        '**/node_modules/**',
        '**/stash-src/**',
      ],
    
    },
    
    plugins: [tsconfigPaths()],
})
