var fadeStart = 100 // 100px scroll or less will equiv to 1 opacity
    ,fadeUntil = 4000// 200px scroll or more will equiv to 0 opacity
    ,fading = $('#fading')


var fadeStart2 = 4000 // 100px scroll or less will equiv to 1 opacity
    ,fadeUntil2 = 8000 // 200px scroll or more will equiv to 0 opacity
    ,fading2 = $('#fading2')

var fadeStart3 = 8000 // 100px scroll or less will equiv to 1 opacity
    ,fadeUntil3=12000 // 200px scroll or more will equiv to 0 opacity
    ,fading3 = $('#fading3')

var fadeStart4=12000 // 100px scroll or less will equiv to 1 opacity
    ,fadeUntil4=16000 // 200px scroll or more will equiv to 0 opacity
    ,fading4 = $('#fading4')

var fadeStart5=16000 // 100px scroll or less will equiv to 1 opacity
    ,fadeUntil5=20000 // 200px scroll or more will equiv to 0 opacity
    ,fading5 = $('#fading5')

var fadeStart6=20000 // 100px scroll or less will equiv to 1 opacity
    ,fadeUntil6=24000 // 200px scroll or more will equiv to 0 opacity
    ,fading6 = $('#fading6')

var fadeStart7=24000 // 100px scroll or less will equiv to 1 opacity
    ,fadeUntil7=28000 // 200px scroll or more will equiv to 0 opacity
    ,fading7 = $('#fading7')

var fadeStart8=28000 // 100px scroll or less will equiv to 1 opacity
    ,fadeUntil8=30000 // 200px scroll or more will equiv to 0 opacity
    ,fading8 = $('#fading8')
;



$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart ){
        opacity=1;
    }else if( offset<=fadeUntil ){
        opacity=1-offset/fadeUntil;
    }
    fading.css('opacity',opacity).html(opacity);
});


$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart2 ){
        opacity=1;
    }else if( offset<=fadeUntil2 ){
        opacity=1-offset/fadeUntil2;
    }
    fading2.css('opacity',opacity).html(opacity);
});


$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart3 ){
        opacity=1;
    }else if( offset<=fadeUntil3 ){
        opacity=1-offset/fadeUntil3;
    }
    fading3.css('opacity',opacity).html(opacity);
});


$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart4 ){
        opacity=1;
    }else if( offset<=fadeUntil4 ){
        opacity=1-offset/fadeUntil4;
    }
    fading4.css('opacity',opacity).html(opacity);
});


$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart5 ){
        opacity=1;
    }else if( offset<=fadeUntil5 ){
        opacity=1-offset/fadeUntil5;
    }
    fading5.css('opacity',opacity).html(opacity);
});


$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart6 ){
        opacity=1;
    }else if( offset<=fadeUntil6 ){
        opacity=1-offset/fadeUntil6;
    }
    fading6.css('opacity',opacity).html(opacity);
});


$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart7 ){
        opacity=1;
    }else if( offset<=fadeUntil7 ){
        opacity=1-offset/fadeUntil7;
    }
    fading7.css('opacity',opacity).html(opacity);
});


$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart8 ){
        opacity=1;
    }else if( offset<=fadeUntil8 ){
        opacity=1-offset/fadeUntil8;
    }
    fading8.css('opacity',opacity).html(opacity);
});
