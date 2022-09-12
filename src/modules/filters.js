export const filters = {
    searchFilter: null,
    categoryFilter: null,
    filterPrice: {min: null, max: null},
    filterColor: [],
    filterShoes: [],
    filterBrand: [],
}



export const filterGoods = (goods) =>{
    let filteredGoods = [...goods];
    if (filters.searchFilter) filteredGoods = searchFilter(filteredGoods, filters.searchFilter)
    if (filters.categoryFilter) filteredGoods = categoryFilter(filteredGoods, filters.categoryFilter)
    if (filters.filterPrice.min != null && filters.filterPrice.max != null || filters.filterPrice.min != null && filters.filterPrice.max == null || filters.filterPrice.min == null && filters.filterPrice.max != null) filteredGoods = filterPrice(filteredGoods, filters.filterPrice.min, filters.filterPrice.max)
    if (filters.filterColor.length) filteredGoods = filterColor(filteredGoods, filters.filterColor)
    if (filters.filterShoes.length) filteredGoods = filterShoes(filteredGoods, filters.filterShoes)
    if (filters.filterBrand.length) filteredGoods = filterBrand(filteredGoods, filters.filterBrand)
    return filteredGoods
}
 const searchFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase())
    })
}

 const filterPrice = (goods, min, max) => {
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

 const filterColor = (goods, array) => {
    return goods.filter(
       ({ color }) =>
        array.some(a => color.startsWith(a))
    );
}

 const filterShoes = (goods, array) => {
    return goods.filter(
       ({ shoes }) =>
        array.some(a => shoes.startsWith(a))
    );
}


 const filterBrand = (goods, array) => {
    return goods.filter(
       ({ title }) =>
        array.some(a => title.startsWith(a))
    );
}

export const sortGoods = (goods) => {
    return goods.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
}
