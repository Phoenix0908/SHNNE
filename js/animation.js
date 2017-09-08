/**
 * Created by 123 on 2017/9/2.
 */
/*$(function(){
    var stop_buttom=$(".list .list_ul .list_img");
    stop_buttom.on("mouseover",function(){
        $(this).children("img").eq(1).attr("src","img/3D/green.png");
    });
    stop_buttom.on("mouseout",function(){
        $(this).children("img").eq(1).attr("src","img/3D/white.png");
    });

});*/
$(document)
    .on("mouseover", ".list .list_ul .list_img" ,function(){
        $(this).children("img").eq(1).attr("src","img/3D/green.png");
    })
    .on("mouseout", ".list .list_ul .list_img" ,function(){
        $(this).children("img").eq(1).attr("src","img/3D/white.png");
    });
