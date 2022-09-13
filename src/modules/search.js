import getData from "./getData";
import renderGoods from "./renderGoods";
import { filters, filterGoods } from "./filters";
import searchBrands from "./searchBrands";
import searchShoes from "./searchShoes";

const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input')

    searchInput.addEventListener('input', (event) => {
        const value = event.target.value
        filters.searchFilter = value;
        getData().then((data) => {
            renderGoods(filterGoods(data));
        })
    })

    const searchBrandsInput = document.querySelector('.brands-search-wrapper_input')
        searchBrandsInput.addEventListener('input', searchBrands)

    const searchShoesInput = document.querySelector('.shoes-search-wrapper_input')
        searchShoesInput.addEventListener('input', searchShoes)
}

export default search