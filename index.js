


// ハンバーガーメニューが押された時の処理
$(function(){
    $('#hamburger').on('click',function(){
      // classにopenがなければ追加する、あれば外す
      $('#hamburger').toggleClass("open");
      $('#header-menu').slideToggle();
    });
  });
  
  // ハンバーガーリンクが押された時に、メニューを閉じてクラスを外す処理
  $(function(){
    $('#header-menu').on('click',function(){
      // classにopenがなければ追加する、あれば外す
      $('#hamburger').removeClass("open");
      $('#header-menu').slideToggle();
    });
  });
  
  // 強調したい部分にマーカーを引く処理
  const marker = document.querySelectorAll(".marker");
  
  document.addEventListener("scroll", ()=>{
    for (let i = 0; i < marker.length; i++) {
      const element = marker[i];
      const distance = element.getBoundingClientRect().top;
      if(distance < window.innerHeight * .8){
        element.classList.add("active");
      }
    }
  
  })