var supplierSwiper = new Swiper('.supplier-container', {
 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {
        1199: { slidesPerView: 6 },
        768: { slidesPerView: 4 },
        320: { slidesPerView: 3 },
    }
})

var clientSwiper = new Swiper('.client-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {
        1199: { slidesPerView: 5 },
        768: { slidesPerView: 4 },
        480: { slidesPerView: 3 },
        320: { slidesPerView: 2 },
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
            $('#loginModal').hide()
        } else {
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

    galleryPop()
    mobileMenuTransition()
})

function contactClick() {
    $('#loginModal').css({'display':'block','opacity':'1'})
}

function galleryPop() {
    $('.gallery_img').click(function(e) {
        e.stopPropagation()
        console.log('clicked')
        $('.gallery_modal').css('display','block')
        const img_src = $(this).attr('src')
        $('.gallery_modal img').attr('src',img_src)
        $('.gallery_wrapper').css('filter','blur(10px)')
    })

    $('html').click(function(e) {
        if (e.target.id === 'galleryModal') {
            $('.gallery_modal').css('display','none')
        $('.gallery_wrapper').css('filter','blur(0px)')
        }
    })
}

function formSubmittion() {
    $('.form').on('submit', function (e) {
        console.log('submitting')
        e.preventDefault();
          
          
        $('.form .btn').val('Sending...');
        $.ajax({
          type: 'post',
          url: 'contact.php',
          data: $('.form').serialize(),
          success: function () {
              $('#result').html('Your request has been submitted');
              $('.form .btn').val('Submit');
              setTimeout( function() { $('#result').html('')}, 1000);
              $('.form').trigger('reset');
          },
          error: function() {
              $('.form .btn').val('Submit');
              $('#result').html('We are facing some problem please try again later!!');
              setTimeout( function() { $('#result').html('')}, 1000)
          }
        });

      });
}

