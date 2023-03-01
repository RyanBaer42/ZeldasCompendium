const fetchData = () => {
    return fetch('https://botw-compendium.herokuapp.com/api/v2/category/materials')
        .then(response => {
            if (response.ok) {
                return response.json()
            } else if (response.status === 404) {
                throw new Error('404')
            } else {
                throw new Error(`An error occurred: status ${response.status}`);
            }
        })
}

export default fetchData