import React, { useState } from 'react'
import { Styles } from '../../styles/Styles'
import { Column } from './data/Column'

const Row = (props: any) => {
  const { columns, row, expansionComponent, rowIndex } = props
  const [expanded, setExpanded] = useState(false)
  return (
    <>
      <tr>
        {columns.map((column: Column, colIndex: number) => (
          <td key={colIndex}>
            {expansionComponent && colIndex === 0 ? (
              <button
                style={Styles.hiddenButton}
                onClick={() => setExpanded(!expanded)}
              >
                <i
                  style={Styles.smallIcon}
                  className={expanded ? 'fas fa-minus' : 'fas fa-plus'}
                />
              </button>
            ) : null}
            {typeof column.accessor === 'string'
              ? row[column.accessor]
              : column.accessor(row)}
          </td>
        ))}
      </tr>
      {expanded ? expansionComponent(row) : null}
    </>
  )
}

export default Row
