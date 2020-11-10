const restaurants = 'https://code-challenge.spectrumtoolbox.com/api/restaurants';

export const getRestaurants = async () => {
    return await fetch(restaurants)
}