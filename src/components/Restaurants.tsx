import React from 'react'
import useRestaurants from '../hooks/useRestaurants'
import { Styles } from '../styles/Styles'
import Table from './Table'

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
      <Table columns={columns} data={restaurants} />
    </div>
  )
}

export default Restaurants
