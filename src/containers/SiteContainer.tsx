import React from 'react'
import { Styles } from '../styles/Styles'

const SiteContainer = (props: any) => {
    return (
        <div style={Styles.siteContainer}>
            {props.children}
        </div>
    )
}

export default SiteContainer