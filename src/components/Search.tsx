import React, { useState } from 'react'
import { Styles } from '../styles/Styles'

const Search = (props: any) => {
  const [search, setSearch] = useState('')
  const { updateSearchFilter } = props
  return (
    <div style={Styles.searchContainer}>
      <input
        style={Styles.searchInput}
        placeholder='Search restaurants...'
        value={search}
        onChange={(e: any) => {
          setSearch(e.target.value)
          // clear search results
          if (e.target.value === '') {
            updateSearchFilter('')
          }
        }}
        onKeyDown={(e: any) => {
          if (e.keyCode === 13) {
            updateSearchFilter(e.target.value)
          }
        }}
      ></input>
      <button onClick={() => updateSearchFilter(search)}>
        <i className='fas fa-search' />
      </button>
    </div>
  )
}

export default Search
