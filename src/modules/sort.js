import getData from "./getData";
import renderGoods from "./renderGoods";
import { sortGoodsAscending, sortGoodsDescending } from "./filters";

const sort = () => {
    const sortBtn = document.querySelector('.sort-cards');
    const sortBlock = document.querySelector('.sort-by')

    sortBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sortBlock.classList.toggle('hide');
    })

    const sortAscending = document.querySelector('.price-ascending')
    const sortDescending = document.querySelector('.price-descending')


    sortAscending.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('click');
        getData().then((data) => {
            renderGoods(sortGoodsAscending(data));
        })
    })

    sortDescending.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('click');
        getData().then((data) => {
            renderGoods(sortGoodsDescending(data));
        })
    })
}

export default sort
