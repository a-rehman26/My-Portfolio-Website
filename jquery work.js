$(document).ready(function () {
    $(".menuNav").click(function () {
        $(".aside-tag").fadeIn(function () {
            $(".aside-tag").css("display", "block")
            $(".aside-tag").css("transform", "translateX(0)")
            $(".closeNav").css("display", "block")
            $(".menuNav").css("display", "none")
        })
    })
    $(".closeNav").click(function () {
        $(".aside-tag").fadeOut(function () {
            $(".aside-tag").css("display", "none")
            $(".aside-tag").css("transform", "translateX(-150%)")
            $(".closeNav").css("display", "none")
            $(".menuNav").css("display", "block")
        })
    })
})