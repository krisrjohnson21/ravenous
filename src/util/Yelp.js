const apiKey = '0ISTKClK4xRDt44KcsjaRGAIOrdC6-CZ87zzkV084XIX0tXbgJm78NT1XnkYnsF7iMI1IoMhLO2RgWX1B-6bDplw9v2C4Ag66SUzQbnXOwo13HBKAdPQlC9a9M3AXHYx';
const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
    }
  }).then(response => {
    return response.json().then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.address,
            city: business.city,
            state: business.state,
            zipCode: business.zipCode,
            category: business.category,
            rating: business.rating,
            reviewCount: business.reviewCount
        })
      }
    })
  })
}

export default Yelp;
