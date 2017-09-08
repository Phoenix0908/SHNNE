/**
 * Created by 123 on 2017/9/2.
 */
$(function(){
    var email=$(".bottom img")
    email.on("mouseover",function(){
        $(this).attr("src","img/z-1.jpg");
    });
    email.on("mouseout",function(){
        $(this).attr("src","img/2Q==-3.jpg");
    });
    var bottomNode=$(".bottom ul li");
    bottomNode.on("mouseover",function(){
        var num=$(this).index()+1;
        var imgsrc="img/h"+num+".jpg"
        $(this).children("img").attr("src",imgsrc);
    });
    bottomNode.on("mouseout",function(){
        var num=$(this).index()+1;
        var imgsrc="img/"+num+".jpg"
        $(this).children("img").attr("src",imgsrc);
    });
});