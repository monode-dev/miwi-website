import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Miwi UI",
  description: "A Highly Flexible UI System for Solid JS",
  srcDir: "docs",
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
      },
    ],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/m.svg" }],
    ["meta", { rel: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "en" }],
    ["meta", { property: "og:title", content: "Miwi UI" }],
    ["meta", { property: "og:site_name", content: "Miwi UI" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://miwi-website.web.app/miwi-og.jpg",
      },
    ],
    ["meta", { property: "og:url", content: "https://miwi-website.web.app/" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: "/kiwi.svg",
    nav: [
      { text: "Home", link: "/" },
      // { text: "Guides", link: "/guides/quickstart" },
      { text: "Cookbook", link: "/cookbook/quickstart" },
      { text: "Docs", link: "/styling/overview" },
    ],

    sidebar: [
      {
        text: "Cookbook",
        items: [
          { text: "Quickstart", link: "/cookbook/quickstart" },
          { text: "Polish Checklist", link: "/cookbook/polish-checklist" },
        ],
      },
      {
        text: "Box Props",
        items: [{ text: "Quickstart", link: "/cookbook/quickstart" }],
      },
      {
        text: "Known Bugs",
        items: [
          {
            text: "Clicking Nested Elements",
            link: "/known-bugs/clicking-nested-elements",
          },
        ],
      },
      {
        text: "Styling",
        items: [
          { text: "Overview", link: "/styling/overview" },
          {
            text: "Size",
            link: "/styling/size",
            items: [
              { text: "Width", link: "/styling/size/width" },
              { text: "Height", link: "/styling/size/height" },
            ],
          },
          {
            text: "Layout",
            link: "/styling/layout",
            items: [
              { text: "Axis", link: "/styling/layout/axis" },
              { text: "Align", link: "/styling/layout/align" },
              { text: "Overflow", link: "/styling/layout/overflow" },
              { text: "Z Index", link: "/styling/layout/z-index" },
            ],
          },
          {
            text: "Decoration",
            link: "/styling/overview",
          },
          {
            text: "Text",
            link: "/styling/overview",
          },
        ],
      },
      {
        text: "Components",
        items: [
          { text: "Overview", link: "/components/overview" },
          { text: "AppBar", link: "/components/appbar" },
          { text: "Body", link: "/components/body" },
          { text: "Box", link: "/components/box" },
          { text: "Button", link: "/components/button" },
          { text: "Card", link: "/components/card" },
          { text: "Column", link: "/components/column" },
          {
            text: "Circular Progress Indicator",
            link: "/components/circularprogressindicator",
          },
          { text: "Delete Dialog", link: "/components/deletedialog" },
          { text: "Dialog", link: "/components/dialog" },
          { text: "Field", link: "/components/field" },
          // { text: "Hidden Delete", link: "/components/hidendelete" },
          // { text: "Icon", link: "/components/icon" },
          // { text: "Label", link: "/components/deletedialog" },
          // { text: "Modal", link: "/components/deletedialog" },
          // { text: "Nav", link: "/components/deletedialog" },
          // { text: "Num Field", link: "/components/deletedialog" },
          // { text: "Offline Warning", link: "/components/deletedialog" },
          // { text: "Overview", link: "/components/deletedialog" },
          // { text: "Page", link: "/components/deletedialog" },
          // { text: "Row", link: "/components/deletedialog" },
          // { text: "Selector", link: "/components/deletedialog" },
          // { text: "Slider", link: "/components/deletedialog" },
          // { text: "Sortable Column", link: "/components/deletedialog" },
          // { text: "Stack", link: "/components/deletedialog" },
          // { text: "Tab Buttons", link: "/components/deletedialog" },
          // { text: "Tab View", link: "/components/deletedialog" },
          // { text: "Txt", link: "/components/deletedialog" },
        ],
      },
      {
        text: "Theory",
        items: [{ text: "Normalization", link: "/theory/normalization" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/monode-dev/Miwi" },
      { icon: `npm`, link: `https://www.npmjs.com/package/miwi` },
      { icon: `x`, link: `https://twitter.com/melchiahmauck` },
    ],
  },
});
