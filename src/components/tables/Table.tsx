import React, { useState } from 'react'
import { Styles } from '../../styles/Styles'
import { Column } from './data/Column'
import { ColumnFilter, ORDER } from './data/ColumnConfiguration'
import HeaderColumn from './HeaderColumn'
import Row from './Row'

const Table = (props: any) => {
  const {
    columns,
    data,
    defaultConfiguration,
    resultsPerPage,
    expansionComponent
  } = props
  const [page, setPage] = useState(1)
  const [columnConfiguration, setColumnConfiguration] = useState(
    defaultConfiguration
  )

  // sort data on header ordering
  var orderedData = [...data]
  if (
    columnConfiguration.column !== '' &&
    columnConfiguration.order !== ORDER.NONE
  ) {
    orderedData.sort((a: any, b: any) => {
      const column = columnConfiguration.column
      return columnConfiguration.order === ORDER.ASC
        ? a[column].localeCompare(b[column])
        : b.name.localeCompare(a[column])
    })
  }

  // filter data on header filter values
  var filteredData = [...orderedData]
  columnConfiguration.filters.forEach((f: ColumnFilter) => {
    filteredData = filteredData.filter((row: any) =>
      row[f.column].toLowerCase().includes(f.filter.toLowerCase())
    )
  })

  // setup page information
  const displayData = filteredData.slice(
    (page - 1) * resultsPerPage,
    (page - 1) * resultsPerPage + resultsPerPage
  )

  const nextPage = () => {
    setPage(page + 1)
  }

  const prevPage = () => {
    setPage(page - 1)
  }

  const pages = Math.ceil(filteredData.length / resultsPerPage)

  return (
    <>
      <table style={Styles.table}>
        <thead>
          <tr>
            {columns.map((column: Column) => (
              <HeaderColumn
                key={column.name}
                setColumnConfiguration={setColumnConfiguration}
                columnConfiguration={columnConfiguration}
                column={column}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {displayData.map((row: any, index: number) => (
            <Row
              expansionComponent={expansionComponent}
              row={row}
              columns={columns}
              rowIndex={index}
              key={index}
            />
          ))}
        </tbody>
      </table>
      <div style={{ ...Styles.horizontalFill, padding: 5 }}>
        <button disabled={page === 1} onClick={() => prevPage()}>
          <i className='fas fa-chevron-left' />
        </button>
        <p>
          {page} of {pages}
        </p>
        <button disabled={page === pages} onClick={() => nextPage()}>
          <i className='fas fa-chevron-right' />
        </button>
      </div>
    </>
  )
}

export default Table
