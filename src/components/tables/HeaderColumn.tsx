import React from 'react'
import { Styles } from '../../styles/Styles'
import { ColumnFilter, ORDER } from './data/ColumnConfiguration'

const HeaderColumn = (props: any) => {
  const { column, setColumnConfiguration, columnConfiguration } = props

  var icon = ''
  switch (columnConfiguration.order) {
    case ORDER.ASC:
      icon = 'fas fa-chevron-up'
      break
    case ORDER.DESC:
      icon = 'fa-chevron-down'
      break
    default:
      icon = 'fa-chevron-right'
      break
  }

  const toggleOrder = () => {
    var nextOrder = ORDER.NONE
    switch (columnConfiguration.order) {
      case ORDER.ASC:
        nextOrder = ORDER.NONE
        break
      case ORDER.DESC:
        nextOrder = ORDER.ASC
        break
      case ORDER.NONE:
        nextOrder = ORDER.DESC
        break
      default:
        break
    }
    setColumnConfiguration({
      ...columnConfiguration,
      column: column.accessor,
      order: nextOrder
    })
  }

  const updateColumnConfiguration = (value: string) => {
    const otherFilters = columnConfiguration.filters.filter(
      (f: ColumnFilter) => f.column !== column.accessor
    )
    const newConfig = {
      ...columnConfiguration,
      filters: [{ column: column.accessor, filter: value }, ...otherFilters]
    }
    setColumnConfiguration(newConfig)
  }

  return (
    <th>
      <div style={Styles.horizontalFillCenter}>
        {column.name}
        {column.sort ? (
          <i
            onClick={() => toggleOrder()}
            style={{ position: 'relative', padding: 5, top: 2 }}
            className={'fas ' + icon}
          />
        ) : null}
        {column.filter ? (
          <input
            onChange={(e: any) => updateColumnConfiguration(e.target.value)}
          ></input>
        ) : null}
      </div>
    </th>
  )
}

export default HeaderColumn
