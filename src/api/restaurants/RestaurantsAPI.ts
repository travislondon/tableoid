const restaurants = 'https://code-challenge.spectrumtoolbox.com/api/restaurants';

const headers = {
    Authorization: 'Api-Key q3MNxtfep8Gt'
}
export const getRestaurants = async () => {
    const result = await fetch(restaurants, {headers: headers})
    return await result.json()
}