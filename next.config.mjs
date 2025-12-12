import nextra from "nextra";

export default nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx"
})({
  i18n: {
    locales: ['pt', 'es'],
    defaultLocale: 'pt'
  }
});
