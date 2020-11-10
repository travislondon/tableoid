import React, { useState } from 'react'
import { Styles } from '../../styles/Styles'
import { Column } from './data/Column'
import { ORDER } from './data/Order'
import HeaderColumn from './HeaderColumn'

const Table = (props: any) => {
  const { columns, data, defaultOrder, resultsPerPage } = props
  const [page, setPage] = useState(1)
  const [columnOrder, setColumnOrder] = useState(defaultOrder)

  // filter data on header ordering, will need
  // to change if other headers need to be orderable
  // at the same time
  var orderedData = [...data]
  if (columnOrder.column !== '' && columnOrder.order !== ORDER.NONE) {
    orderedData.sort((a: any, b: any) => {
      const column = columnOrder.column
      return columnOrder.order === ORDER.ASC
        ? a[column].localeCompare(b[column])
        : b.name.localeCompare(a[column])
    })
  }

  // setup page information
  const displayData = orderedData.slice(
    (page - 1) * resultsPerPage,
    (page - 1) * resultsPerPage + resultsPerPage
  )

  const nextPage = () => {
    setPage(page + 1)
  }

  const prevPage = () => {
    setPage(page - 1)
  }

  const pages = Math.ceil(data.length / resultsPerPage)

  return (
    <>
      <table style={Styles.table}>
        <thead>
          <tr>
            {columns.map((column: Column) => (
              <HeaderColumn
                key={column.name}
                setColumnOrder={setColumnOrder}
                columnOrder={columnOrder}
                column={column}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {displayData.map((row: any, index: number) => (
            <tr key={index}>
              {columns.map((column: Column) => {
                return typeof column.accessor === 'string' ? (
                  <td key={column.name}>{row[column.accessor]}</td>
                ) : (
                  <td key={column.name}>{column.accessor(row)}</td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ ...Styles.horizontalFill, padding: 10 }}>
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
