export const searchFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase())
    })
}

export const categoryFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category === value
    })
}

export const filterPrice = (goods, min, max) => {
    return goods.filter((goodsItem) => {
        if (min === '' && max === '') {
            return goodsItem
        } else if ( min !== '' && max !== '') {
            return goodsItem.price > +min && goodsItem.price < +max
        } else if ( min !== '' && max === '') {
            return goodsItem.price > +min
        } else if (min === '' && max !== '') {
            return goodsItem.price < +max
        }
    })
}

export const colorFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        if(value) {
            return goodsItem.color === true
        } else {
            return goodsItem
        }
    })
}

export const brandFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        if(value) {
            return goodsItem.title === true
        } else {
            return goodsItem
        }
    })
}