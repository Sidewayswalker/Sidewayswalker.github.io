import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
        build: {
            outDir: 'build',
            assetsDir: "assets", // Directory for static assets in the build output.
            minify: "esbuild", // Minification options (terser or esbuild).
            },
            rollupOptions: {
                input: {
                  main: resolve(__dirname, "./index.html"),
                  404: resolve(__dirname, "./src/pages/error/Error"),
                },
              },
        server: {
            proxy: {
                "/api":'http://localhost:5001',
            }
        },
        plugins: [react()],
        base: "./"
    };
});
