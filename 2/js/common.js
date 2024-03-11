$(document).ready(function(){ // 문서준비이벤트 시작


  $(".gnb > li > a[href^='#']").click(function(){
    event.preventDefault();  // 기본 a링크 동작 방지
    let target = $(this.hash);
    $('html, body').animate({ scrollTop: target.offset().top }, 500);
});

  $(".mb_list > li > a[href^='#']").click(function(){
    event.preventDefault();  // 기본 a링크 동작 방지
    let target = $(this.hash);
    $('html, body').animate({ scrollTop: target.offset().top }, 500);
});


//mb_menu
$('.mb_wrap').hide();

$('.mb').click(function(){
    $('body').css({'overflow':'hidden'});
    $('.mb_wrap').fadeIn();
});

$('.mb_close').click(function(){
    $('body').css({'overflow':'auto'});
    $('.mb_wrap').fadeOut();
});

$('.mb_event').hide();

$('.mb_list li:nth-of-type(4)').click(function(){
    $('.mb_event').stop().slideToggle();
});


  const options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 1.0,  // 50%가 viewport에 들어와 있어야 callback 실행
  }
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, options);
  
  const boxList = document.querySelectorAll('.boxwrap');
  
  // 반복문을 돌려 모든 DOM에 적용
  boxList.forEach(el => observer.observe(el));


  var swiper = new Swiper(".ev", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


}); // 문서준비이벤트 종료