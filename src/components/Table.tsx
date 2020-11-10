import React from 'react'
import { Column } from './Column'

const Table = (props: any) => {
  const { columns, data } = props
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column: Column) => (
            <th>
              {column.name}
              {column.sort ? (
                <i
                  style={{ position: 'relative', padding: 5, top: 2 }}
                  className='fas fa-chevron-down'
                />
              ) : null}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row: any) => (
          <tr>
            {columns.map((column: Column) => {
              return typeof column.accessor === 'string'
                ? row[column.accessor]
                : column.accessor(row)
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
