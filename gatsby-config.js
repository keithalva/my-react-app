module.exports = {
  siteMetadata: {
    title: 'H Collective',
    description: 'Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit.',
    keywords: 'best model agencies in new york'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 's5m78fftreqw',
        accessToken: '02b921d14152cf6f12f330251f01d0fa63e7ed3f8390b270f5760c1b53c1af71'
      }
    }
  ],
}
