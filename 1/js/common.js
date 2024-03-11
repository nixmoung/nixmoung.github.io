$(document).ready(function(){ // 문서준비이벤트 시작


         // HEADER

         $('header').show();

         $(window).scroll(function(){
           if ($(this).scrollTop() > 500) {
               $('header').fadeOut();
           } else {
               $('header').fadeIn();
           }
 
         });
 
          //LANGUAGE
          $('.language ul').hide();
          $('.language').click(function(){
              $('.language ul').stop().slideToggle();
          });
 
         $('.modal,.depth2').hide();
           $('#header .util .sitemap a').click(function(){
             $(this).toggleClass('active');
             $('.modal').fadeToggle();
         });



         
        // MODAL
          
            
        $('.modal .gnb > li').mouseenter(function(){
          $(this).find('.depth2').stop().fadeIn();
          $('.modal').stop().fadeIn();

        });
      
        $('.modal .gnb > li').mouseleave(function(){
          $(this).find('.depth2').stop().fadeOut();
        });


      const mb = new Swiper('.mb', {
        spaceBetween: 30,
        effect: "fade",
        autoplay: {
            delay: 2500,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
           
        },

        pagination: {
            el: '.swiper-pagination',  // 버튼 태그 설정
            type: 'bullets',  // 버튼 종류 설정 'bullets' | 'fraction(숫자)' | 'progressbar(흐름)'
            clickable: true,  // 버튼 클릭 여부
          
        },

        loop: true, //슬라이드 반복 여부
        speed: 1000 //슬라이드 동작 속도 1초
    });

        
       //LANGUAGE
       $('.sub_nb ul').hide();
       $('.sub_nb').click(function(){
           $('.sub_nb ul').stop().slideToggle();
       });
      
        // main banner - 메인 슬라이드 재생, 정지
        $('.mb_play').hide();

        $('.mb_pause').on('click', function(){
            mb.autoplay.stop(); // 슬라이드 autoplay를 멈춤 slide:내가정한 이름
            $('.mb_pause').hide();
            $('.mb_play').show();
        });
        $('.mb_play').on('click', function(){
            mb.autoplay.start();
            $('.mb_pause').show();
            $('.mb_play').hide();
        });
          

        $('.desktop').hide();

        // insta
        var swiper = new Swiper(".sns", {
          slidesPerView: 2, //초기값 설정 모바일값이 먼저!
          spaceBetween: 300,
          loop: true,
          autoplay: {
            delay: 1500,
            disableOnInteraction: false,
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 4,
            }
          }
        });

        var swiper = new Swiper(".sub_list", {
          slidesPerView: 2.5,
          slidesPerGroup : 1,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
          },

        });

        var swiper = new Swiper(".q_box", {
          slidesPerView: 3.5,
          spaceBetween: 20,
          scrollbar: {
            el: ".swiper-scrollbar",
           
          },
        });


       
      
        
}); // 문서준비이벤트 종료