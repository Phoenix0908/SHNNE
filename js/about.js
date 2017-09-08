/**
 * Created by 123 on 2017/9/2.
 */
$(function(){
    $(".nav .nav_right_ul li a").on("mouseover",function(){
        var num=$(this).parent().index();
        if(num==1){
            return;
        }
        $(this).css({
            color: "white",
            border:"1px solid gray"
        });
    });
    $(".nav .nav_right_ul li a").on("mouseout",function(){
        var num=$(this).parent().index();
        if(num==1){
            return;
        }
        $(this).css({
            color: "gray",
            border:"1px solid black"
        });
    });
});