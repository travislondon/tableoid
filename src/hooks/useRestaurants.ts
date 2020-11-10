import {useState} from 'react'
import { getRestaurants } from '../api/restaurants/RestaurantsAPI';

const useRestaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    if(restaurants.length === 0) {
        getRestaurants().then(data => setRestaurants(data))
    }
    return restaurants
}

export default useRestaurants