import getData from "./getData";
import renderGoods from "./renderGoods";
import { filters, filterGoods } from "./filters";

const priceFilter = () => {
    const minInput = document.getElementById('min')
    const maxInput = document.getElementById('max')

    minInput.addEventListener('input', () => {
        filters.filterPrice.min = minInput.value;
        getData().then((data) => {
            renderGoods(filterGoods(data));
        })
    })
    maxInput.addEventListener('input', () => {
        filters.filterPrice.max = maxInput.value;
        getData().then((data) => {
            renderGoods(filterGoods(data));
        })
    })

}

export default priceFilter