import getData from "./getData";
import renderGoods from "./renderGoods";
import { filters, filterGoods } from "./filters";

const colorFilter = () => {

    $('input:checkbox[name=color]').on('change', function() {
        const array = [];
        $("input:checkbox[name=color]:checked").each(function(){
            array.push($(this).val());
            filters.filterColor = array;
            getData().then((data) => {
                renderGoods(filterGoods(data));
            })
        })
    })
}
export default colorFilter