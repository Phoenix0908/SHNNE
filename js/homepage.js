/**
 * Created by 123 on 2017/8/31.
 */
$(function(){
    $(".nav .nav_right_ul li a").on("mouseover",function(){
        $(this).addClass("cur_state");
    });
    $(".nav .nav_right_ul li a").on("mouseout",function(){
        $(this).removeClass("cur_state");
    });
    var rendering=$(".content .content_one .content_one_left");
    var bmi=$(".content .content_two .content_two_right");
    var animation=$(".content .content_three .content_one_left");
    rendering.on("mouseover",function(){
        $(this).children("img").attr("src","img/b-1.png").css({opacity:"0.3"}).animate({opacity:"1"},1000);
        $(this).children("span").css({background:"green"});
    });
    rendering.on("mouseout",function(){
        $(this).children("img").attr("src","img/a-1.png").css({opacity:"0.3"}).animate({opacity:"1"},1000);
        $(this).children("span").css({background:"gray"});
    });
    bmi.on("mouseover",function(){
        $(this).children("img").attr("src","img/b-2.png").css({opacity:"0.3"}).animate({opacity:"1"},1000);
        $(this).children("span").css({background:"green"});
    });
    bmi.on("mouseout",function(){
        $(this).children("img").attr("src","img/a-2.jpg").css({opcity:"0.3"}).animate({opcity:1},300);
        $(this).children("span").css({background:"gray"});
    });
    animation.on("mouseover",function(){
        $(this).children("img").attr("src","img/b-3.jpg").css({opcity:"0.3"}).animate({opcity:1},300);
        $(this).children("span").css({background:"green"});
    });
    animation.on("mouseout",function(){
        $(this).children("img").attr("src","img/a-3.jpg").css({opcity:"0.3"}).animate({opcity:1},300);
        $(this).children("span").css({background:"gray"});
    });
});
