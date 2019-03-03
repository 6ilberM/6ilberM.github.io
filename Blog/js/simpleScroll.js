$(function () {
    var lastScrollTop = 0;
    var $navbar = $('.navbar');
    var navbarHeight = $navbar.outerHeight();
    var movement = 0;
    var lastDirection = 0;
  
    $(window).scroll(function(event){
      var st = $(this).scrollTop();
      movement += st - lastScrollTop;
  
      if (st > lastScrollTop) { // scroll down
        if (lastDirection != 1) {
          movement = 0;
        }
        var margin = Math.abs(movement);
        if (margin > navbarHeight) {
          margin = navbarHeight;
        }
        margin = -margin;
        $navbar.css('top', margin+"px")
  
        lastDirection = 1;
      } else { // scroll up
        if (lastDirection != -1) {
          movement = 0;
        }
        var margin = Math.abs(movement);
        if (margin > navbarHeight) {
          margin = navbarHeight;
        }
        margin = margin-navbarHeight;
        $navbar.css('top', margin+"px")
  
        lastDirection = -1;
      }
  
      lastScrollTop = st;

    });
  });

  //How to move slowly towards something!
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (s) {
        s.preventDefault();``

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});