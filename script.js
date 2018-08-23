// Parallax Background 
$(function(){
    var container = $('.Home');
    var img = $('.background');
    var iw = img.width();

    container.on('mousemove', function(e){
        var x = (e.pageX + iw*0.3) * 0.35;
        img.css({'background-position-x': - x});
    });
});
// End 


// Menu Bar 
var sidebar = function() {
    document.getElementById("Sidebar").classList.toggle("active");
    document.getElementsByClassName("Icons").style.right = "150px";
    document.getElementsByClassName("Icons").style.transition = "all 500ms linear";
}
// End


// Menu Buttons & Arrows
$(document).ready(function(){
    var mq = window.matchMedia( "(max-width: 600px)" );
    var home = $('ul li').eq(0);
    var about = $('ul li').eq(1);
    var project = $('ul li').eq(2);
    var contact = $('ul li').eq(3);
    var up = $('.circle2');
    var down = $('.circle7');
    if (mq.matches) {
        // Heights up different classes
        var h1 = 430;
        var h2 = 700 + h1;
        var h3 = 1500 + h2;
        var heights = [0, h1, h2, h3, h3];
        var fix = 50;
        var pgheight = h3 + 380;
        console.log(pgheight)
    }
    else {
        // Heights up different classes
        var h1 = $('.Home').height();
        var h2 = $('.About.Me').height() + h1;
        var h3 = $('.Portfolio').height() + h2;
        var heights = [0, h1, h2, h3, h3];
        var fix = 50;
        var pgheight = $('.Page').height() - 400;
    }   
        // Menu scrolling
        home.on('click', function(){
            $('html, body').animate({
                scrollTop : heights[0]
            }, 500)
        });
        about.on('click', function(){
            $('html, body').animate({
                scrollTop : heights[1]-50
            }, 500)
        });
        project.on('click', function(){
            $('html, body').animate({
                scrollTop : heights[2]-50
            }, 500)
        });
        contact.on('click', function(){
            $('html, body').animate({
                scrollTop : heights[3]-50
            }, 500)
        });
    
        // Arrows
        $(window).on('scroll', function(){
            var win = $(this),
                top = win.scrollTop(),
                fract = Math.round(4*top/pgheight),
                scrollTo = fract + 1;
                scrolldown = heights[scrollTo]-fix;
                scrollup = heights[scrollTo-2]-fix;
    
            //make up and down icon appear when necessary
            if (top > h1-300) { 
                if(!up.is(':visible')) {
                    up.show();
                }
            }
            else {
                up.hide();
            }
            if (top > h3 - 500) {
                down.hide();
            }
            else {
                down.show();
            }
        })
        if (scrolldown = 'NaN') { //fix since initial value of scroll is NaN
            scrolldown = 650;
        }
        down.on('click', function(){
            $('html, body').animate({
                scrollTop : scrolldown
            }, 500)
        })
        up.on('click', function(){
            $('html, body').animate({
                scrollTop : scrollup //needs an offset of 1400 to go up one panel
            }, 500)
        })
})
// End


// Project Door Opening
$(document).ready(function(){
    var rdoor = $('.rightdoor'),
        ldoor = $('.leftdoor');
    
    $(window).on('scroll', function(){
        var win = $(this),
            top = win.scrollTop();

    if (top > 940 && top < 990) {
        rdoor.css('right','-10px');
        ldoor.css('left','-10px');
    }
    else if (top > 990 && top < 1040) {
        rdoor.css('right','-20px');
        ldoor.css('left','-20px');     
    }
    else if (top > 1040 && top < 1090) {
        rdoor.css('right','-30px');
        ldoor.css('left','-30px');
    }
    else if (top > 1090 && top < 1140) {
        rdoor.css('right','-40px');
        ldoor.css('left','-40px');
    }
    else if (top > 1140 && top < 1190) {
        rdoor.css('right','-50px');
        ldoor.css('left','-50px');
    }
    else if (top > 1190 && top < 1240) {
        rdoor.css('right','-60px');
        ldoor.css('left','-60px');
    }
    else if (top > 1240 && top < 1290) {
        rdoor.css('right','-70px');
        ldoor.css('left','-70px');
    }
    else if (top > 1290) {
        rdoor.css('right','-75px');
        ldoor.css('left','-75px');
    }
    else {
        rdoor.css('right','0px');
        ldoor.css('left','0px');
    }
    })
})
// End