module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My developer-portafolio",
  },
  plugins: [
    "gatsby-plugin-sass", 
    "gatsby-plugin-less",
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          `Raleway\:300,400,500,600,700`
        ],
        display: 'swap'
      }
    }
  ],
};
