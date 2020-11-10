import React from 'react'

const RestaurantDetail = (data: any) => {
  const { address1, attire, website } = data.data
  return (
    <tr>
      <td>{address1}</td>
      <td>{attire}</td>
      <td>{website}</td>
    </tr>
  )
}

export default RestaurantDetail
