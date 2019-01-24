import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import { StaticQuery, graphql } from 'gatsby'

const Content = styled.div`
  ${tw`px-32 py-8 font-mono`};
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'Wayan Jimmy - Web developer currently focusing on PHP & Javascript',
            },
            { name: 'keywords', content: 'github, php, javascript, bali' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Content>{children}</Content>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
