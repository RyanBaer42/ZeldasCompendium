const fetchData = (itemName) => {
    let path;
    if (!itemName){
        path = 'category/materials'
    } else {
        path = `entry/${itemName}`
    }
    return fetch(`https://botw-compendium.herokuapp.com/api/v2/${path}`)
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