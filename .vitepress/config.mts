import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Miwi UI",
  description:
    "An in development UI system that just works, with lots of components.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guides", link: "/guides/quickstart" },
      { text: "Docs", link: "/styling/overview" },
    ],

    sidebar: [
      {
        text: "Guides",
        items: [{ text: "Quickstart", link: "/guides/quickstart" }],
      },
      {
        text: "Styling",
        items: [{ text: "Overview", link: "/styling/overview" }],
      },
      {
        text: "Components",
        items: [{ text: "Overview", link: "/components/overview" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/monode-dev/Miwi" },
      { icon: `npm`, link: `https://www.npmjs.com/package/miwi` },
      { icon: `x`, link: `https://twitter.com/melchiahmauck` },
    ],
  },
});
