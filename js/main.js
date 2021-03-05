
// $(function(){


    /* -------- menu start-------- */



//     let link = $('.menu_ul ul li a');

//     link.on('click', function(even){
//         even.preventDefault();
//         link.removeClass('active')
//         let selector = $(this).addClass('active').attr('href');
//         let target = $(selector);


//         $('html, body').animate({ scrollTop: target.offset().top - 70}, 500);
//     })


//     /* --------------------------- */

//     $(window).scroll(function(){
//         let scroll = $(window).scrollTop();
//         link.each(function(){
//             let selector = $(this).attr('href');
//             let target = $(selector);

//             if(scroll >= target.offset().top - 100){
//                link.removeClass('active');
//                $(this).addClass('active');
//             }
//         })

//     })



//     /* -------- menu end  -------- */
    
//     $('.menu_btn').click(function(){
//         $('.menu_ul').toggleClass('active');
//     });

//     $(window).resize(function(){
//         if($(window).width() < 992){
//             $('.menu_ul').removeClass('active');
//         }
//     })


//     /* --------------------   slider    ---------------------- */

//     function slider(){
//         let btn_left = document.querySelector('.left'),
//             btn_right = document.querySelector('.right'),
//             images = document.querySelectorAll('.item_box');
//         let i = 0;

//         btn_left.addEventListener('click', function(){
//            images[i].classList.remove('active');
//            i--;
//            if(i < 0){i = images.length - 1}
//            images[i].classList.add('active');
//         })

//         btn_right.addEventListener('click', function(){
//            images[i].classList.remove('active');
//            i++;
//            if(i > images.length - 1) {i = 0}
//            images[i].classList.add('active');
//         })


//     }

//     slider();


//     /* --------------trainers--------------- */

//     $('.trainers_cart').click(function(){
//         $(this).toggleClass('active');
//         $('.trainers_cart').removeClass('active');
//         $(this).addClass('active');
//     })

//     /* -------------- sl ------------------- */

//     $('#elastislide').elastislide();
    
// })  





$(function(){
$('.btn_menu').click(function(){
    $('.col-lg-7').slideToggle();
    
});


// $(window).scroll(function(){
//     let scroll = $(window).scrollTop();
//     link.each(function(){
//         let selector = $(this).attr('href');
//         let target = $(selector);

//         if(scroll >= target.offset().top - 100){
//            link.removeClass('active');
//            $(this).addClass('active');
//         }
//     });

// });


// $(window).resize(function(){
//     if($(window).width() < 768){
//         $('.menu_ul').removeClass('active');
       
//     }
// })

$('.menu_ul').click(function(){
    $('.col-lg-7').hide();
})

$('.show-2').hide();

$('#btn_right').click(function(){
    $('.show-1').toggle();
    $('.show-2').toggle();
})


$('#btn_left').click(function(){
    $('.show-2').toggle();
    $('.show-1').toggle();
})


$('#form_input').click(function(){
    $('#form_label').show(500);
})
$('#form_input1').click(function(){
    if(true){
    $('#form_label1').show(500);}
})
$('#form_input2').click(function(){
    $('#form_label2').show(500);
})

})
