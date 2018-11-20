import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
      <h1>Keith is learning to design and code React apps.</h1>
      <p>Keith is learning about the best tools and design systems.</p>
      <Link to="/page-2/">This is a test! yay!</Link>
      </div>
    </div>
  </div>
)

export default IndexPage