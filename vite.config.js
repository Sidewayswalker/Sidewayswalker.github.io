import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path'; // Add this import for resolve

export default defineConfig(() => {
    return {
        build: {
            outDir: 'build',
            assetsDir: "assets",
            minify: "esbuild",
            rollupOptions: { // Move rollupOptions inside build
                input: {
                    main: resolve(__dirname, "./index.html")
                    // 404: resolve(__dirname, "./src/pages/error/Error"),
                },
            },
        },
        server: {
            proxy: {
                "/api": {
                    target: 'https://localhost:5001',
                }
            }
        },
        plugins: [react()],
        base: "./"
    };
});
