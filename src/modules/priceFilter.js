import getData from "./getData";
import renderGoods from "./renderGoods";
import { filterPrice } from "./filters";

const priceFilter = () => {
    const minInput = document.getElementById('min')
    const maxInput = document.getElementById('max')

    minInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(filterPrice(data, minInput.value, maxInput.value));
        })
    })
    maxInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(filterPrice(data, minInput.value, maxInput.value));
        })
    })

}

export default priceFilter