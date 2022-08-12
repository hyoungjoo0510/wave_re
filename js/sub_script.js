$(function(){
    var winWidth = $(window).outerWidth();
    $(window).on("resize", function(){
        winWidth = $(window).outerWidth();
        console.log(winWidth)
        slideInit();
    })
    $(".hdr").load("./header.html", function(){
        $(".ham").click(function () {
            $(this).find("a").toggleClass("active");
    
            if ($("nav").hasClass("active")) {
                $("nav").removeClass("active");
                $(this).find(".hamText").children().text("MENU");
                $("body").css("overflow", "auto")
                $(".bg").removeClass("active")
            } else {
                $("nav").addClass("active");
                $(this).find(".hamText").children().text("CLOSE");
                $("body").css("overflow", "hidden")
                $(".bg").addClass("active");
            }
        })
    })

    $(".subSlide>div").on({
        "mouseover": function(){
            $(this).addClass("active");
        },

        "mouseout": function(){
            $(this).removeClass("active");
        }
    })
    
    let moveNum = 0;
    function moveSlide(){
        if(winWidth>1024){
            $(".subSlide").stop().animate({
                marginLeft: -moveNum*25+"%"
            }, 500)
        }else if(winWidth>640){
            $(".subSlide").stop().animate({
                marginLeft: -moveNum*50+"%"
            }, 500)
        }else{
            $(".subSlide").stop().animate({
                marginLeft: -moveNum*100+"%"
            }, 500)
        }

    }
    function slideInit(){
        moveNum =0;
        $(".subSlide").css("margin-left", 0)
    }
    $(".subBtnWrap>.rightBtn").on("click", function(){
        if(winWidth>1024){
            if(moveNum<3){
                moveNum++;
            }
        }else if(winWidth>640){
            if(moveNum<5){
                moveNum++;
            }
        }else{
            if(moveNum<6){
                moveNum++;
            }
        }
        
        moveSlide();
    })

    $(".subBtnWrap>.leftBtn").on("click", function(){
        if(moveNum>0){
            moveNum--;
        }
        moveSlide();
    })
})