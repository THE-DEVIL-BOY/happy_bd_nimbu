$(".img").click(function () {
    $(".box-lid").addClass("sleep")
    setTimeout(() => {
        $(".k").addClass("sleep")
        $(".container2").removeClass("sleep")
        $("#vedio").attr("src", "nimbu.mp4")
        var audio = new Audio("snimbu.mpeg");
        audio.play();
        $(".container2").addClass("ani")
        setTimeout(() => {
            $(".container2").addClass("ani1")
            setTimeout(() => {
                $(".container2").addClass("sleep")
                $(".container3").removeClass("sleep")
                $("#vedio1").attr("src", "save.mp4")
                var audio = new Audio("saveme.mpeg");
                audio.play();
                $(".container3").addClass("ani2")
                setTimeout(() => {
                    $(".container3").addClass("ani3")
                    setTimeout(() => {
                        $(".container3").addClass("sleep")
                        $(".container4").removeClass("sleep")
                        $(".container4").addClass("ani4")
                        
                    }, 1000);
                }, 21000);
            }, 1000);
        }, 11000);

    }, 1000);
});