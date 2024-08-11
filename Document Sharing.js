function loading(){
    document.getElementById("page-loader").style.visibility="visible"
    $(window).on('load', function(){
        $('#page-loader').hide();
    });
}