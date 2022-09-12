import getData from "./getData";
import renderGoods from "./renderGoods";
import { filters, filterGoods } from "./filters";

const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input')

    searchInput.addEventListener('input', (event) => {
        const value = event.target.value
        filters.searchFilter = value;
        getData().then((data) => {
            renderGoods(filterGoods(data));
        })
    })
}

export default search