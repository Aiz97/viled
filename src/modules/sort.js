import getData from "./getData";
import renderGoods from "./renderGoods";
import { sortGoods } from "./filters";

const sort = () => {
    const sortBtn = document.querySelector('.sort-cards');
    sortBtn.addEventListener('click', () => {
        getData().then((data) => {
            renderGoods(sortGoods(data));
        })
    })
}

export default sort
