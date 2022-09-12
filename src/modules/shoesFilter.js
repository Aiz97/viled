import getData from "./getData";
import renderGoods from "./renderGoods";
import { filters, filterGoods } from "./filters";


const shoesFilter = () => {

    $('input:checkbox[name=shoes]').on('change', function() {
        const array = [];
        $("input:checkbox[name=shoes]:checked").each(function(){
            array.push($(this).val());
            filters.filterShoes = array;
            getData().then((data) => {
                renderGoods(filterGoods(data));
            })
        })
    })

}
export default shoesFilter