function searchShoes() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("shoesInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("shoes");
    li = ul.getElementsByClassName("checkbox");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("input")[0];
        txtValue = a.value
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }

    }
}

export default searchShoes