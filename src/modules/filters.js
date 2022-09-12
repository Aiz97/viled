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

export const filterColor = (goods, array) => {
    return goods.filter(
        // (goodsItem) => {
        // for  (let i = 0; i < array.length; i++) {
        //     // return goodsItem[i].title === array[i];
        //     return goodsItem.title.includes(array[i]);
        // }
       ({ color }) =>
        array.some(a => color.startsWith(a))
    );
}


export const filterBrand = (goods, array) => {
    return goods.filter(
        // (goodsItem) => {
        // for  (let i = 0; i < array.length; i++) {
        //     // return goodsItem[i].title === array[i];
        //     return goodsItem.title.includes(array[i]);
        // }
       ({ title }) =>
        array.some(a => title.startsWith(a))
    );
}
