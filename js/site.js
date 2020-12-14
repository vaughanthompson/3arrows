$(document).ready(function(){

    // sitewide and activeLinking
    var str = window.location.pathname;
    if (str.indexOf('/en/') >= 0) {
        $('div.containMNav').load("inc-mobNavEN.html");
        $('div#masthead').load("inc-topNavEN.html");
        $('footer#siteWide').load("inc-footerEN.html");
    } else if (str.indexOf('/de/') >= 0) {
        $('div.containMNav').load("inc-mobNavDE.html");
        $('div#masthead').load("inc-topNavDE.html");
        $('footer#siteWide').load("inc-footerDE.html");
    } else {
        $('div.containMNav').load("/en/inc-mobNavEN.html");
        $('div#masthead').load("/en/inc-topNavEN.html");
        $('footer#siteWide').load("/en/inc-footerEN.html");
    }

  



    $.localScroll({
            target: 'body',
            queue: false,
            hash: false,
            duration: 500,
            easing: 'easeOutQuad'
    });

    // mobile top scroll
    $('#navMobile').hide();
    new Waypoint({
    element: document.getElementsByTagName('body'),
    handler: function(direction) {
        if (direction === 'down') {
            $('#navMobile').fadeTo(1000,'1.0');
        }
        else {
            $('#navMobile').hide();
        }
    },
        offset: '-50%'
    })    


    // home slider
    $(".owl-theme-slider").owlCarousel({
        items:1,
        margin:0,
        rewind:true,
        animateIn:'fadeIn',
        animateOut:'fadeOut',
        loop:true,
        autoplay:true,
        autoplayTimeout:10000,
        autoplayHoverPause:true,
        touchDrag:true,
        mouseDrag:true,
        stopOnHover:true,
        dots:true,
        dotsContainer:'#cI-hook',
        nav:true,
        navText: ["<span class='icon-arrow-left-outline'></span>","<span class='icon-arrow-right-outline'></span>"],
        autoplaySpeed:5000,
        smartSpeed:1000,
        fluidSpeed:1
    });

    // minimal slider
    $(".owl-theme-slider1").owlCarousel({
        items:1,
        margin:0,
        rewind:true,
        animateIn:'fadeIn',
        animateOut:'fadeOut',
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        touchDrag:true,
        mouseDrag:true,
        stopOnHover:true,
        dots:false,
        dotsContainer:'#cI-hook',
        nav:false,
        //navText: ["<span class='icon-arrow-left-outline'></span>","<span class='icon-arrow-right-outline'></span>"],
        autoplaySpeed:5000,
        smartSpeed:1000,
        fluidSpeed:1
    });


    // mobile nav
    $('#navClose').hide();
    $('#navClose').click(function(){
        $(this).hide();
        $('#navCart').show();
        $('#navTrigger').show();
        $("div.mblnavContainer").scrollTo(0);
        $('div.mblnav').hide();
        $('html, body').removeClass('noscroll');
        return false;
    });

    $('#navTrigger').click(function(){
        $(this).hide();
        $('#navCart').hide();
        $('#navClose').show();
        $('div.mblnav').show();
        $('html, body').addClass('noscroll');
        return false;

    });


    // slideNav
    $('#omniDrop').click(function(){
        //$(this).hide();
        $(this).siblings('a').toggleClass('faded');
        $(this).find('i').toggleClass('rotateIC');
        $('#slideNav').slideToggle();
        return false;

    });

    // show random div
    var elems = $(".randomShow");
    if (elems.length) {
    var keep = Math.floor(Math.random() * elems.length);
    for (var i = 0; i < elems.length; ++i) {
        if (i !== keep) {
        $(elems[i]).hide();
        }
    }
    }

    // named anchor scrollTo and offset
    var anchorLink = $(window.location.hash);
    if ( anchorLink.length ) {
        $("html, body").animate({scrollTop: anchorLink.offset().top - 50 }, 500);
    }


    // onOff waypoints content area
    $('.onOff').each(function() {
        var inview = new Waypoint.Inview({
        element: this,
        enter: function(direction) {
            // alert('Enter triggered with direction ' + direction)
            },
            entered: function(direction) {     
                $(this[0,'element']).find('.onOffTarget').removeClass('stateInactive');                            
                $(this[0,'element']).find('.onOffTarget').addClass('stateActive');
                    
            },
            exit: function(direction) {
                $(this[0,'element']).find('.onOffTarget').removeClass('stateActive');                            
                $(this[0,'element']).find('.onOffTarget').addClass('stateInactive');
            },
            exited: function(direction) {
                // alert('Exited triggered with direction ' + direction)
            }
        })
    });





        // theme switcher
        var themeOverride = 'no'
        var d = new Date();
        
        var dy = d.getYear();
        var dm = d.getMonth();
        var dd = d.getDate();
        var gt = d.getTime();
            
        var dDayStart = new Date(d.getFullYear(),d.getMonth(),d.getDate(),07,00,0,0);
        var dDayEnd = new Date(d.getFullYear(),d.getMonth(),d.getDate(),17,30,0,0);
    
        if (d.getTime() >= dDayStart.getTime() && d.getTime() < dDayEnd.getTime() && themeOverride == 'no')
        {
            //day
            $('body').addClass('dayTheme');
            // load css file
            // $('<link>').appendTo('head').attr({type: 'text/css', rel: 'stylesheet', href: '/css/your_css_file.css'});
        } else {
            //night
            $('body').addClass('nightTheme');
            // load css file
            // $('<link>').appendTo('head').attr({type: 'text/css', rel: 'stylesheet', href: '/css/your_css_file.css'});
        }
    


});




