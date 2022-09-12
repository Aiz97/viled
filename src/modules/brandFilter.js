import getData from "./getData";
import renderGoods from "./renderGoods";
import { filters, filterGoods } from "./filters";

const brandFilter = () => {

    $('input:checkbox[name=brands]').on('change', function() {
        const array = [];
        $("input:checkbox[name=brands]:checked").each(function(){
            array.push($(this).val());
            filters.filterBrand = array;
            getData().then((data) => {
                renderGoods(filterGoods(data));
            })
        })
    })

}
export default brandFilter