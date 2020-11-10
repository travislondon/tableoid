import React from 'react'
import Restaurants from '../components/Restaurants'
import { Styles } from '../styles/Styles'
import SiteContainer from './SiteContainer'

const Restaurant = (props: any) => {
  return (
    <SiteContainer>
      <div style={{ ...Styles.columnContainer, ...Styles.fixedWidthContainer }}>
        <p style={{ ...Styles.bold, ...Styles.fontHeader }}>Selection</p>
        <Restaurants />
      </div>
    </SiteContainer>
  )
}

export default Restaurant
