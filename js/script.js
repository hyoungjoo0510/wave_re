$(function () {

    let winWidth = $(window).outerWidth();
    console.log(winWidth);
    
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
        $(".bg").on("click", function(){
            $("nav").removeClass("active");
            $(".ham").find("a").toggleClass("active");
            $(".ham").find(".hamText").children().text("MENU");
            $("body").css("overflow", "auto")
            $(".bg").removeClass("active")
        })
        $("#nav>ul>li").on({
            "mouseover": function(){
                $(this).addClass("active");
            },
            "mouseout": function(){
                $(this).removeClass("active");
            }
        })
    })
    

    
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    let showSlide = 0;
    let tabCount = 0;
    let showTab = 0;

    let showSlide2 = 0;
    let tabCount2 = 0;
    let showTab2 = 0;

    let obj1;
    let obj2;

    if(winWidth > 1024){
        obj1 = $(".section1 .groupSlide>div:lt(4)").clone();
        obj2 = $(".section2 .groupSlide>div:lt(4)").clone();
    }else if(winWidth>480){
        obj1 = $(".section1 .groupSlide>div:lt(2)").clone();
        obj2 = $(".section2 .groupSlide>div:lt(2)").clone();
    }else{
        obj1 = $(".section1 .groupSlide>div:eq(0)").clone();
        obj2 = $(".section2 .groupSlide>div:eq(0)").clone();
    }
    
    $(".section1 .groupSlide").append(obj1);
    $(".section2 .groupSlide").append(obj2);

    var slideLength = $(".section1 .groupSlide>div").length;
    console.log("슬라이드:" + slideLength);

    if(winWidth > 1024){
        $(".groupSlide").width((slideLength / 4) * 100 + "%")
    }else if(winWidth>480){
        $(".groupSlide").width((slideLength / 2) * 100 + "%")
    }else{
        $(".groupSlide").width(slideLength * 100 + "%")
    }
    
    function gslideMove() {
        
        $(".section1 .groupSlide").stop().animate({
            marginLeft: -showSlide * 100 + "%"
        }, 500);
        if(winWidth > 1024){
            if (tabCount > 3) {
                tabCount = 0;
            } else if (tabCount < 0) {
                tabCount = 3;
            }
    
            $(".section1 .groupSlide>div").eq((tabCount * 4)).addClass("active")
                .siblings().removeClass("active");
    
        }else if(winWidth>480){

            if (tabCount > 7) {
                tabCount = 0;
            } else if (tabCount < 0) {
                tabCount = 7;
            }

            $(".section1 .groupSlide>div").eq(tabCount*2).addClass("active")
            .siblings().removeClass("active");
        }else{
            if (tabCount > 15) {
                tabCount = 0;
            } else if (tabCount < 0) {
                tabCount = 15;
            }

            $(".section1 .groupSlide>div").eq(tabCount).addClass("active")
            .siblings().removeClass("active");
        }

        if ($(".section1 .groupSlide>div").eq(4).hasClass("active")) {
            showTab = 1;
            $(".section1>.sectionTab>li").eq(showTab).addClass("active")
                .siblings().removeClass("active");
        }
        if ($(".section1 .groupSlide>div").eq(8).hasClass("active")) {
            showTab = 2;
            $(".section1>.sectionTab>li").eq(showTab).addClass("active")
                .siblings().removeClass("active");
        }
        if ($(".section1 .groupSlide>div").eq(12).hasClass("active")) {
            showTab = 3;
            $(".section1>.sectionTab>li").eq(showTab).addClass("active")
                .siblings().removeClass("active");
        }
        if ($(".section1 .groupSlide>div").eq(16).hasClass("active") ||
            $(".section1 .groupSlide>div").eq(0).hasClass("active")) {
            showTab = 0;
            $(".section1>.sectionTab>li").eq(showTab).addClass("active")
                .siblings().removeClass("active");
        }

        if ($(".section1 .groupSlide>div").eq(2).hasClass("active")) {
            showTab = 0;
            $(".section1>.sectionTab>li").eq(showTab).addClass("active")
                .siblings().removeClass("active");
        }
        if ($(".section1 .groupSlide>div").eq(6).hasClass("active")) {
            showTab = 1;
            $(".section1>.sectionTab>li").eq(showTab).addClass("active")
                .siblings().removeClass("active");
        }
        if ($(".section1 .groupSlide>div").eq(10).hasClass("active")) {
            showTab = 2;
            $(".section1>.sectionTab>li").eq(showTab).addClass("active")
                .siblings().removeClass("active");
        }
        if ($(".section1 .groupSlide>div").eq(14).hasClass("active")) {
            showTab = 3;
            $(".section1>.sectionTab>li").eq(showTab).addClass("active")
                .siblings().removeClass("active");
        }

        if ($(".section1 .groupSlide>div").eq(3).hasClass("active")) {
            showTab = 0;
            $(".section1>.sectionTab>li").eq(showTab).addClass("active")
                .siblings().removeClass("active");
        }
        if ($(".section1 .groupSlide>div").eq(7).hasClass("active")) {
            showTab = 1;
            $(".section1>.sectionTab>li").eq(showTab).addClass("active")
                .siblings().removeClass("active");
        }
        if ($(".section1 .groupSlide>div").eq(11).hasClass("active")) {
            showTab = 2;
            $(".section1>.sectionTab>li").eq(showTab).addClass("active")
                .siblings().removeClass("active");
        }
        if ($(".section1 .groupSlide>div").eq(15).hasClass("active")) {
            showTab = 3;
            $(".section1>.sectionTab>li").eq(showTab).addClass("active")
                .siblings().removeClass("active");
        }

    }

    $(".section1 .nextBtn").on("click", function () {

        if(winWidth>1024){
            if (showSlide >= 4) {
                $(".section1 .groupSlide").css("margin-left", 0);
                showSlide = 0;
            }
        }else if(winWidth>480){
            if (showSlide >= 8) {
                $(".section1 .groupSlide").css("margin-left", 0);
                showSlide = 0;
            }
        }else{
            if (showSlide >= 16) {
                $(".section1 .groupSlide").css("margin-left", 0);
                showSlide = 0;
            }
        }
        
        showSlide++;
        tabCount++;
        gslideMove();
    })

    $(".section1 .prevBtn").on("click", function () {

        if(winWidth>1024){
            if (showSlide == 0) {
                $(".section1 .groupSlide").css("margin-left", -((slideLength / 4) - 1) * 100 + "%");
                showSlide = 4;
            }
        }else if(winWidth>480){
            if (showSlide == 0) {
                $(".section1 .groupSlide").css("margin-left", -((slideLength / 2) - 1) * 100 + "%");
                showSlide = 8;
            }
        }else{
            if (showSlide == 0) {
                $(".section1 .groupSlide").css("margin-left", -(slideLength - 1) * 100 + "%");
                showSlide = 16;
            }
        }
        
        showSlide--;
        tabCount--;
        gslideMove();
    })

    function gslideMove2() {
        
        $(".section2 .groupSlide").stop().animate({
            marginLeft: -showSlide2 * 100 + "%"
        }, 500);
        if(winWidth > 1024){
            if (tabCount2 > 3) {
                tabCount2 = 0;
            } else if (tabCount2 < 0) {
                tabCount2 = 3;
            }
    
            $(".section2 .groupSlide>div").eq((tabCount2 * 4)).addClass("active")
                .siblings().removeClass("active");
    
        }else if(winWidth>480){

            if (tabCount2 > 7) {
                tabCount2 = 0;
            } else if (tabCount2 < 0) {
                tabCount2 = 7;
            }

            $(".section2 .groupSlide>div").eq(tabCount2*2).addClass("active")
            .siblings().removeClass("active");
        }else{
            if (tabCount2 > 15) {
                tabCount2 = 0;
            } else if (tabCount2 < 0) {
                tabCount2 = 15;
            }

            $(".section2 .groupSlide>div").eq(tabCount2).addClass("active")
            .siblings().removeClass("active");
        }

        if ($(".section2 .groupSlide>div").eq(4).hasClass("active")) {
            showTab2 = 1;
            $(".section2>.sectionTab>li").eq(showTab2).addClass("active")
                .siblings().removeClass("active");
        }
        if ($(".section2 .groupSlide>div").eq(8).hasClass("active")) {
            showTab2 = 2;
            $(".section2>.sectionTab>li").eq(showTab2).addClass("active")
                .siblings().removeClass("active");
        }
        if ($(".section2 .groupSlide>div").eq(12).hasClass("active")) {
            showTab2 = 3;
            $(".section2>.sectionTab>li").eq(showTab2).addClass("active")
                .siblings().removeClass("active");
        }
        if ($(".section2 .groupSlide>div").eq(16).hasClass("active") ||
            $(".section2 .groupSlide>div").eq(0).hasClass("active")) {
            showTab2 = 0;
            $(".section2>.sectionTab>li").eq(showTab2).addClass("active")
                .siblings().removeClass("active");
        }

        if ($(".section2 .groupSlide>div").eq(2).hasClass("active")) {
            showTab2 = 0;
            $(".section2>.sectionTab>li").eq(showTab2).addClass("active")
                .siblings().removeClass("active");
        }
        if ($(".section2 .groupSlide>div").eq(6).hasClass("active")) {
            showTab2 = 1;
            $(".section2>.sectionTab>li").eq(showTab2).addClass("active")
                .siblings().removeClass("active");
        }
        if ($(".section2 .groupSlide>div").eq(10).hasClass("active")) {
            showTab2 = 2;
            $(".section2>.sectionTab>li").eq(showTab2).addClass("active")
                .siblings().removeClass("active");
        }
        if ($(".section2 .groupSlide>div").eq(14).hasClass("active")) {
            showTab2 = 3;
            $(".section2>.sectionTab>li").eq(showTab2).addClass("active")
                .siblings().removeClass("active");
        }

        if ($(".section2 .groupSlide>div").eq(3).hasClass("active")) {
            showTab2 = 0;
            $(".section2>.sectionTab>li").eq(showTab2).addClass("active")
                .siblings().removeClass("active");
        }
        if ($(".section2 .groupSlide>div").eq(7).hasClass("active")) {
            showTab2 = 1;
            $(".section2>.sectionTab>li").eq(showTab2).addClass("active")
                .siblings().removeClass("active");
        }
        if ($(".section2 .groupSlide>div").eq(11).hasClass("active")) {
            showTab2 = 2;
            $(".section2>.sectionTab>li").eq(showTab2).addClass("active")
                .siblings().removeClass("active");
        }
        if ($(".section2 .groupSlide>div").eq(15).hasClass("active")) {
            showTab2 = 3;
            $(".section2>.sectionTab>li").eq(showTab2).addClass("active")
                .siblings().removeClass("active");
        }

    }

    $(".section2 .nextBtn").on("click", function () {
        console.log("섹션2클릭")
        if(winWidth>1024){
            if (showSlide2 >= 4) {
                $(".section2 .groupSlide").css("margin-left", 0);
                showSlide2 = 0;
            }
        }else if(winWidth>480){
            if (showSlide2 >= 8) {
                $(".section2 .groupSlide").css("margin-left", 0);
                showSlide2 = 0;
            }
        }else{
            if (showSlide2 >= 16) {
                $(".section2 .groupSlide").css("margin-left", 0);
                showSlide2 = 0;
            }
        }
        
        showSlide2++;
        tabCount2++;
        gslideMove2();
    })

    $(".section2 .prevBtn").on("click", function () {

        if(winWidth>1024){
            if (showSlide2 == 0) {
                $(".section2 .groupSlide").css("margin-left", -((slideLength / 4) - 1) * 100 + "%");
                showSlide2 = 4;
            }
        }else if(winWidth>480){
            if (showSlide2 == 0) {
                $(".section2 .groupSlide").css("margin-left", -((slideLength / 2) - 1) * 100 + "%");
                showSlide2 = 8;
            }
        }else{
            if (showSlide2 == 0) {
                $(".section2 .groupSlide").css("margin-left", -(slideLength - 1) * 100 + "%");
                showSlide2 = 16;
            }
        }
        
        showSlide2--;
        tabCount2--;
        gslideMove2();
    })

    $(".line1").infiniteslide({
        'pauseonhover': false,
        'responsive': true,
        'clone': 3,
        'speed': 100
    });

    $('.parallaxBanner').parallax({androidFix: false});

    $(".line2").infiniteslide({
        'direction': 'right',
        'pauseonhover': false,
        'responsive': true,
        'clone': 3,
        'speed': 100
    });
    $(".line3").infiniteslide({
        'direction': 'left',
        'pauseonhover': false,
        'responsive': true,
        'clone': 3,
        'speed': 100
    });
})