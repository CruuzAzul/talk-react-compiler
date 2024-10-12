import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	site: "https://slides-talk-react-compiler.vercel.app",
	integrations: [react()],
	base: "/",
});
