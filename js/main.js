$(document).ready(function(){

    // desktop
    if($(window).width() > 991){
        var marginLeft = parseInt( $('.container').css('margin-left') )
        $('.home-banner .homeSlider .slick-dots').css('margin-left', (marginLeft+15))
    }

    // mobile
    if($(window).width() < 991){
        $('.recipe-list').slick({
            arrows:false,
            centerMode:true,
        })
        
        // $('.filter').slick({
        //     arrows:false,
        //     centerMode:true,
        // })
        
    }

    $('.homeSlider .btnld').click(function(e){
        e.preventDefault();
        $('.search-popup').css('transform','scale(1)');
    })
    
})



$(document).keyup(function(e) {
    // esc
    if (e.keyCode === 27){
        $('.search-popup').css('transform','scale(0)');
    }
});


$('.nav-tabs li').click(function () {
    var index = $(this).index() + 1;

    $('.nav-tabs li').removeClass('active');
    $(this).addClass('active');

    $('.tab-content-custom .tab-pane').removeClass('active');
    $('.tab-content-custom .tab-pane:nth-child(' + index + ')').addClass('active');
});

$('.homeSlider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.videoSlider').slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
});



$('.vdeoimg-wrap').click(function (event) {
    event.preventDefault();
    var videoUrl = $(this).attr('data-url');
    $('.videoWrap').fadeIn();
    $('.play-icon').fadeOut();
    $(this).find('.videoWrap').html('<iframe src="https://www.youtube.com/embed/' + videoUrl + '?autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>');
    return false;
});







if (screen.width > 992) {
     $(document).ready(function name(params) {
         $(".left-section .address-list").mCustomScrollbar();
     });
    }



if (screen.width <= 1200) {


    $('.menu').click(function () {
        if ($(this).is('.active:not(.back)')) {
            $(this).addClass('back');
              $('.overlay').fadeOut();
        } else if ($(this).is('.back')) {
            $(this).removeClass('back');
             $('.overlay').fadeOut();
        } else {
            $(this).addClass('active');
            $('.overlay').fadeIn();
        }

        $('.navbar-collapse').toggleClass('updowntoggle');
        
    });

    $('li.heads').click(function () {
        
        if ($(this).find('ul').css('display') == 'block') {  
            $(this).find('ul').slideUp();
            $(this).find('.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
            return false;
         }
        
        $('li.heads .fa').removeClass('fa-angle-up').addClass('fa-angle-down');
        $('li.heads ul').slideUp();
        
        $(this).find('.fa').removeClass('fa-angle-down').addClass('fa-angle-up');
        $(this).find('ul').slideDown();
        
         

       
    });


    $('.listmap-btn').click(function name(params) {
        $('.address-list').fadeToggle();
        $('.right-section').fadeToggle();
        // $(this).html('List');

        if ($(this).html() == 'Map') {
            $(this).html('List');
        } else if ($(this).html() == 'List') {
            $(this).html('Map');
        }
    });

    $('.get_direction').click(function name(params) {
        $('.address-list').fadeToggle();
        $('.right-section').fadeToggle();
        $('.listmap-btn').html('List');
    });
}

if (screen.width < 760) {

    $('.inner-wrapper .nav-tabs').slick({
        dots: false,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
        variableWidth: true,
    });
}