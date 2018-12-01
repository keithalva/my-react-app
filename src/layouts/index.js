import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './index.css'
import Footer from '../components/Footer';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.descirption },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    <Header />
      {children()}
    <Footer data={data}>
    2019 H Collective™ <a href="mailto:keith@thehhub.com"> Email Us</a>
    </Footer>
  
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    allContentfulLink(sort: {fields: [createdAt], order: ASC}) {
      edges{
        node {
          title
          url
          createdAt
        }
      }  
    }
  }
`
