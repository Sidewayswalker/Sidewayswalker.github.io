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
                    target: 'http://localhost:5001',
                    changeOrigin: true, // Recommended option for proper proxying
                    rewrite: (path) => path.replace(/^\/api/, ''), // Optional, if needed to rewrite the path
                }
            }
        },
        plugins: [react()],
        base: "./"
    };
});
