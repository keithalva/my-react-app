import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #3F3F3F;
  text-align: center;

`

const SectionCellGroup = styled.div`
  max-width: 800;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1 , 1fr);
  }
`


const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
      <h1>35,000 hand-<br/> picked creators in a single powerful search.</h1>
      <p>Brands and agencies use the Hub to find the best creators in seconds.</p><br></br>
      <Link to="/page-2/">Watch this video</Link>
      <div className="Logos">
        <img src={require('../Images/logo1.png')}
        width="50" />
        <img src={require('../Images/logo2.png')}
        width="50" />
        <img src={require('../Images/logo3.png')}
        width="50" />
      </div>
      <Wave />
      </div>
    </div>
    <div className="Cards">
        <h2>Create Unlimted Jobs.</h2>
        <div className="CardGroup">
        <Card
          title="Photographers"
          text="12 sections"
          image={require('../images/wallpaper1.png')} />
        <Card
          title="Models"
          text="12 sections"
          image={require('../images/wallpaper2.png')} />
        <Card
          title="Videographers"
          text="12 sections"
          image={require('../images/wallpaper1.png')} />
        </div>
      </div>
        <Section 
          image={require('../images/wallpaper1.png')}
          logo={require('../images/logo-react.png')}
          title="H Collective"
          text="Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
          />
          <SectionCaption>12 Sections - 6 Hours</SectionCaption>
          <SectionCellGroup>
            {staticdata.cells.map(cell => (
            <Cell
            title={cell.title}
            image={cell.image} />
            ))}
          </SectionCellGroup>

    </div>
)

export default IndexPage