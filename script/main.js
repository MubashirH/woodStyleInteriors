var supplierSwiper = new Swiper('.supplier-container', {
 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {
        1199: { slidesPerView: 5 },
        768: { slidesPerView: 3 },
        480: { slidesPerView: 2 },
        400: { slidesPerView: 1 },
    }
})

var clientSwiper = new Swiper('.client-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {
        1199: { slidesPerView: 4 },
        768: { slidesPerView: 3 },
        480: { slidesPerView: 2 },
        400: { slidesPerView: 1 },
    }
})

function mobileMenuTransition() {
    const mobileMenu = document.querySelector('.mobile_menu_list')
    const humberger = document.querySelector('.humberger_icon')
    const bodyWrapper = document.querySelector('.body_wrapper')
    let clicked = false
    humberger.addEventListener('click', function() {
        console.log(clicked)
        if (clicked) {
            humberger.src = './images/icons/menu.svg'
            mobileMenu.style.right = '-100%'
            bodyWrapper.style.filter = 'blur(0px)'
            clicked = false
        } else {
            humberger.src = './images/icons/cancel.svg'
            mobileMenu.style.right = '0px'
            bodyWrapper.style.filter = 'blur(3px)'
            clicked = true
        }
    })
}

$(document).ready( function () {
    let scrollValue
    window.addEventListener('scroll', function() {
        scrollValue = window.pageYOffset
        if ( window.pageYOffset > scrollValue) {
            console.log('top')
            $('.menu_wrapper').css('transform','translateY(-100px)')
        } else {
            console.log('bto')
            $('.menu_wrapper').css('transform' ,'translateY(00px)')
        }
        if ( window.pageYOffset >=  ($('.banner_wrapper').height()-100)) {
            $('.menu_wrapper').css('backgroundColor','white')
            $('#loginModal').hide()
        } else {
            $('.menu_wrapper').css('backgroundColor','transparent')
            $('#loginModal').show()
        }
    });

    $('#search').click(function() {
        if ($(this).hasClass('search')) {
            $('.search_input').css({'max-height':'fit-content','padding':'10px 20px','opacity':'1'})
            $(this).removeClass('search')
        } else {
            $('.search_input').css({'max-height':'0','padding':'0','opacity':'0'})
            $(this).addClass('search')
        }
    })

    $('#modal_btn').click( function () {
        if ($(this).hasClass('login_modal')) {
            $('#loginModal').css({'display':'block','opacity':'1'})
            $('.body_wrapper').css({'filter':'blur(5px)', 'overflow':'hidden','height':'100vh'})
        }
    })

    $('.modal_close').click(function() {
        $('#loginModal').css({'display':'none','opacity':'0'})
        $('.body_wrapper').css({'filter':'blur(0px)','overflow':'auto','height':'fit-content'})
    })

    
    mobileMenuTransition()
})

function contactClick() {
    $('#loginModal').css({'display':'block','opacity':'1'})
}