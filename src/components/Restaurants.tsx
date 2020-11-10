import React from 'react'
import { Styles } from '../styles/Styles'

const Restaurants = (props: any) => {
  return (
    <div style={Styles.tableContainer}>
      <table>
        <thead>
          <tr>
            <th>
              Item Header One
              <i
                style={{ position: 'relative', padding: 5, top: 2 }}
                className='fas fa-chevron-down'
              />
            </th>
            <th>
              Item Header Two
              <i
                style={{ position: 'relative', padding: 5, top: 2 }}
                className='fas fa-chevron-down'
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Item One</td>
            <td>Item Two</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Restaurants
