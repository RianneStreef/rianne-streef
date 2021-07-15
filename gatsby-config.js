module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "rianne-streef",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-fontawesome-css",

    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     icon: "src/images/icon.png",
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat`,
          `source sans pro\:300,400,400i,`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
};
