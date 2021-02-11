$("#header .gnb").mouseover(function(){
    $(this).stop().animate({
        height:318
    },500);
    $("#header .subBg").stop().slideDown(500);
}).mouseout(function(){
    $(this).stop().animate({
        height:18
    },500);
    $("#header .subBg").stop().slideUp(500);
})

   $("#footer .family .btn.off").click(function(){
            //1) 현재 클릭된 나 자신이 보이지 않아야함
            $(this).css("display","none");
            //2) .btn.on이 보여야함
            $(".family .btn.on").css("display","block");
            //3) .family.list가 스르륵 보여야함
            $(".family .list").stop().slideDown(300); //toggle못들어감 : on,off상태가 명확하게 나뉘기때문 
                                        //애니메이션명령은 최종한번만 되도록하기 위해 .stop()이 대부분 들어감
            return false;
        });
        $("#footer .family .btn.on").click(function(){   
            $(this).css("display","none");         
            $(".family .btn.off").css("display","block");          
            $(".family .list").stop().slideUp(300);                                    
            return false;
        });
        

 $(".breadCrumbs .bcIn .bcDepth .b.off").eq(0).click(function(){
            //1) 현재 클릭된 나 자신이 보이지 않아야함
            $(this).css("display","none");
            //2) .btn.on이 보여야함
            $(".breadCrumbs .bcIn .bcDepth .b.on").css("display","block");
            //3) .family.list가 스르륵 보여야함
            $(".breadCrumbs .bcIn .bcDepth .sub").eq(0).stop().slideDown(500);
            return false;
        });
        $(".breadCrumbs .bcIn .bcDepth .b.on").click(function(){   
            $(this).css("display","none");         
            $(".breadCrumbs .bcIn .bcDepth .b.off").css("display","block");          
            $(".breadCrumbs .bcIn .bcDepth .sub").eq(0).stop().slideUp(300);           
            return false;
        });
$(".breadCrumbs .bcIn .bcDepth .b.off").eq(1).click(function(){
            //1) 현재 클릭된 나 자신이 보이지 않아야함
            $(this).css("display","none");
            //2) .btn.on이 보여야함
            $(".breadCrumbs .bcIn .bcDepth .b.on").css("display","block");
            //3) .family.list가 스르륵 보여야함
            $(".breadCrumbs .bcIn .bcDepth .sub").eq(1).stop().slideDown(500);
            return false;
        });
        $(".breadCrumbs .bcIn .bcDepth .b.on").click(function(){   
            $(this).css("display","none");         
            $(".breadCrumbs .bcIn .bcDepth .b.off").css("display","block");          
            $(".breadCrumbs .bcIn .bcDepth .sub").eq(1).stop().slideUp(300);                                    
            return false;
        });


