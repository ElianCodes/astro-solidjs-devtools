import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import devtools from "solid-devtools/vite";

export default defineConfig({
	integrations: [solidJs()],
	vite: {
		plugins: [devtools({ autoname: true })],
	},
});
