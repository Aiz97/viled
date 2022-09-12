import getData from "./getData";
import renderGoods from "./renderGoods";
import { filterBrand } from "./filters";

const brandFilter = () => {
    const checkboxes = document.querySelectorAll('#brands input[type=checkbox]')

    $('input:checkbox[name=brands]').on('change', function() {
        let array = [];
        $("input:checkbox[name=brands]:checked").each(function(){
            array.push($(this).val());
            console.log(array);
            getData().then((data) => {
                renderGoods(filterBrand(data, array));
            })
        })
    })

}
export default brandFilter