import getData from "./getData";
import renderGoods from "./renderGoods";
import { filterColor } from "./filters";

const colorFilter = () => {
    $('input:checkbox[name=color]').on('change', function() {
        let array = [];
        $("input:checkbox[name=color]:checked").each(function(){
            array.push($(this).val());
            console.log(array);
            getData().then((data) => {
                renderGoods(filterColor(data, array));
            })
        })
    })
}
export default colorFilter