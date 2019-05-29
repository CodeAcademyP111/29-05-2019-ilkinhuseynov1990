$(document).ready(function () {

    $(".timing").click(function () {
        $(".modalwindow").hide();
    })


    $("#main .imageshow .image_item img").click(function () {
        var img = $(this).data("img");
        var str = $(this).data("msg");
        var index = $(this).data("index");

        $("#main .modalwindow .slider").children().eq(0).attr("src", `img/lg/${img}`);

        $("#main .modalwindow .slider").children().eq(1).text(str);


        if ($(".active")) {
            $(".active").removeClass("active");
        }

        $(".nav_bottom_image").children().eq(index).children().eq(1).addClass("active");

      
        $(".modalwindow").show();
    })

})