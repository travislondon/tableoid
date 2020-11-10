import React from 'react'
import useRestaurants from '../hooks/useRestaurants'
import { Styles } from '../styles/Styles'
import { ORDER } from './tables/data/Order'
import Table from './tables/Table'

const Restaurants = (props: any) => {
  const restaurants = useRestaurants()

  const columns = [
    { name: 'Name', sort: true, accessor: 'name' },
    { name: 'City', accessor: 'city' },
    { name: 'State', accessor: 'state' },
    { name: 'Genre', accessor: 'genre' }
  ]

  return (
    <div style={Styles.tableContainer}>
      <span style={{ ...Styles.bold, ...Styles.fontHeader }}>Selection</span>
      <Table
        resultsPerPage={10}
        columns={columns}
        data={restaurants}
        defaultOrder={{
          column: 'name',
          order: ORDER.ASC
        }}
      />
    </div>
  )
}

export default Restaurants
