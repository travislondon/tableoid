import React from 'react'
import { ORDER } from './data/Order'

const HeaderColumn = (props: any) => {
  const { column, setColumnOrder, columnOrder } = props

  var icon = ''
  switch (columnOrder.order) {
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
    switch (columnOrder.order) {
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
    setColumnOrder({ column: column.accessor, order: nextOrder })
  }

  return (
    <th>
      {column.name}
      {column.sort ? (
        <i
          onClick={() => toggleOrder()}
          style={{ position: 'relative', padding: 5, top: 2 }}
          className={'fas ' + icon}
        />
      ) : null}
    </th>
  )
}

export default HeaderColumn
