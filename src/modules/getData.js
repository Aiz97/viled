const getData = (str) => {
    return fetch(
        `https://viled-ece06-default-rtdb.firebaseio.com/goods/goods.json`
    )
    .then((response) => {
        return response.json()
    })
}

export default getData