const collapse = () => {
    $(document).ready(function () {
        $('.filter-btn').click(function () {
            $(this).find('i').toggleClass('fa-angle-down fa-angle-up');
        });
    });
}

export default collapse