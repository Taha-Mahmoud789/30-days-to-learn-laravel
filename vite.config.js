import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/images/logo.svg',
            ],
            refresh: true,
        }),
    ],
    build: {
        outDir: 'public/build',
        rollupOptions: {
            input: {
                main: 'resources/js/app.js',
                style: 'resources/css/app.css',
                logo: 'resources/images/logo.svg',
            },
        },
    },
});