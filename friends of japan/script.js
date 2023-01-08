$(".discoverbtn").on("click", function(){
    $(".content-container").hide();
    var current = $(this).closest(".content-container");
    current.show();
    $(".paneldata").removeClass('hide_top hide_bottom hide_left');
    if(current.hasClass("left")){
        $(".left-content").css("display", "none"); 
        $(".main-container").hide();
        $(".paneldata").addClass('left_animation');
    }
    else if (current.hasClass("right-top")){
        $(".paneldata").addClass('top_70');
        $(".line-top").animate({height:"50%"});
        $(".line-top").css("left","50%");
        $(".row.rightcontainer").css({width:"100%"});
        $(".line-bottom").hide("fade");   
        $(".row.rightcontainer").addClass('right_top_animation'); 
        $(".paneldata").addClass('right_top_animation');
    }
    else if (current.hasClass("right-bottom")){
        $(".paneldata").addClass('top_70');
        $(".line-top").animate({height:"50%"});
        $(".line-top").css("left","50%");
        $(".row.rightcontainer").css({width:"100%"});
        $(".line-bottom").hide("fade");
        $(".row.rightcontainer").addClass('right_bottom_animation');
        $(".paneldata").addClass('right_bottom_animation');
    } 
    else {
        alert('none of them')
    }
    current.children().css("position","relative");
    current.children().css("bottom","0px");
    current.css("width","100%");
    current.css("height","70vh");
    $(".left").css("height","70vh");
    $(".rightcontainer").css("height","70vh");
    $(".main-container").css("height","70vh");
    $(this).hide();
    current.children("p").css("padding-top","50vh");
    current.children("h2").css("margin","0px auto");
    current.children().css("text-align","center");
    $( "#data-content" ).load(  $(this).data("value")+".html", function() {
        $(".paneldata").show();
    });
})


let panels = document.querySelector('.panel');

$(".backbtn").on("click", function(){
    if ($('.paneldata').hasClass('right_bottom_animation')) {
        $('.paneldata').addClass('hide_bottom');
    } 
    else if ($('.paneldata').hasClass('right_top_animation')) {
        $('.paneldata').addClass('hide_top');
    }
    else if ($('.paneldata').hasClass('left_animation')) {
        $('.paneldata').addClass('hide_left');
    }
    $(".paneldata").removeClass('right_bottom_animation right_top_animation left_animation top_70');
    $(".rightcontainer").removeClass('right_bottom_animation right_top_animation');
    $(".left-content").css("display", "");
    $(".line-top").animate({height:"10%"});
        $(".line-top").css("left","10%");
        $(".line-bottom").show();
    $(".rightcontainer").show();
    $(".rightcontainer").css("height","100vh");
    $(".main-container").css("height","100vh");
        $(".main-container").show();
    $(".discoverbtn").show();
    $(".content-container").show();
    $(".left").css("width", "30%");
    $(".rightcontainer").css("width", "70%");
    $(".rightcontainer>div").css("height", "50%");
    $(".rightcontainer>.content-container>p").css("position", "");
    $(".rightcontainer>.content-container>p").css("padding", "");
    $(".rightcontainer>.content-container>p").css("text-align", "");
    $(".rightcontainer>.content-container>h2").css("text-align", "");
    $(".rightcontainer>.content-container>h2").css("margin","0px 0px");
    $(".rightcontainer>.content-container>button").css("position", "");
    $(".rightcontainer>.content-container>button").css("bottom", "");
    $(".left-content").css("width","");
        $(".left-content").css("margin","");
})

