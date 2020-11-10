import { useState } from 'react'
import { getRestaurants } from '../api/restaurants/RestaurantsAPI'

const useRestaurants = (filter: string) => {
  const [restaurants, setRestaurants] = useState([])
  if (restaurants.length === 0) {
    getRestaurants().then(data => setRestaurants(data))
  }
  var adjustedResults = restaurants.map((r: any) => {
    r.genre = r.genre.replaceAll(',', ', ')
    return r
  })
  if (filter && filter !== '') {
    adjustedResults = adjustedResults.filter(
      (r: any) =>
        r.name.toLowerCase().includes(filter.toLowerCase()) ||
        r.city.toLowerCase().includes(filter.toLowerCase()) ||
        r.genre.toLowerCase().includes(filter.toLowerCase())
    )
  }
  return adjustedResults
}

export default useRestaurants
