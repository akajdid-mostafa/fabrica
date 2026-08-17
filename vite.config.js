import { sync } from "glob";
import { defineConfig } from "vite";
import path, { resolve } from "path";
import tailwindcss from '@tailwindcss/vite';
import handlebars from "vite-plugin-handlebars";

export default defineConfig(({ mode }) => {
    const list = [];

    if (mode === "production") { sync("src/*.html").forEach((file) => { list.push(file); }); }

    return {
        root: "src",
        base: "/",
        // publicDir: "../public",
        server: { open: true, },
        plugins: [
            tailwindcss(),
            handlebars({
                partialDirectory: resolve("./src/partials"),
            }),
        ],
        resolve: {
            alias: {
                "@/*": path.resolve("./*"),
                "@css": path.resolve("./src/assets/css/"),
            },
        },
        build: {
            outDir: "../dist",
            emptyOutDir: true,
            rollupOptions: {
                input: [...list],

                // optional
                // output: {
                //     // Entry JS files
                //     entryFileNames: 'assets/[name].js',

                //     // Dynamic chunks
                //     chunkFileNames: 'assets/[name].js',

                //     // CSS, images, fonts
                //     assetFileNames: (assetInfo) => {
                //         if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                //             return 'assets/[name][extname]'
                //         }
                //         return 'assets/[name][extname]'
                //     }
                // },
            }
        },
    };
});
