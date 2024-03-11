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

}); // 문서준비이벤트 종료