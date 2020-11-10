import React, { useState } from 'react'
import useRestaurants from '../hooks/useRestaurants'
import { Styles } from '../styles/Styles'
import RestaurantDetail from './RestaurantDetail'
import Search from './Search'
import { ORDER } from './tables/data/ColumnConfiguration'
import Table from './tables/Table'

const Restaurants = (props: any) => {
  const [search, setSearch] = useState('')
  const restaurants = useRestaurants(search)

  const columns = [
    { name: 'Name', sort: true, accessor: 'name' },
    { name: 'City', accessor: 'city' },
    { name: 'State', accessor: 'state', filter: true },
    { name: 'Genre', accessor: 'genre', filter: true }
  ]

  return (
    <div style={Styles.tableContainer}>
      <Search
        updateSearchFilter={(val: string) => setSearch(val)}
        search={search}
      />
      <Table
        resultsPerPage={10}
        columns={columns}
        data={restaurants}
        defaultConfiguration={{
          column: 'name',
          order: ORDER.ASC,
          filters: []
        }}
        expansionComponent={(data: any) => <RestaurantDetail data={data} />}
      />
    </div>
  )
}

export default Restaurants
