//scrollrevealjs implementation
window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 2000,
  origin:'bottom'
});
sr.reveal('.showcase-left', {
  duration: 2000,
  origin:'top',
  distance:'300px',
  reset: true
});
sr.reveal('.showcase-right', {
  duration: 2000,
  origin:'right',
  distance:'300px'
});
sr.reveal('.showcase-btn', {
  duration: 2000,
  delay: 500,
  origin:'bottom'
});
sr.reveal('#testimonial div', {
  duration: 2000,
  origin:'bottom'
});
sr.reveal('.info-left1', {
  duration: 2000,
  origin:'left',
  distance:'1000px',
  viewFactor: 0.5,
  reset: true
});
sr.reveal('.info-left2', {
  duration: 2000,
  origin:'left',
  distance:'1000px',
  viewFactor: 0.5,
  reset: true
});
sr.reveal('.info-right2', {
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.5,
  reset: true
});
sr.reveal('#r1', {
  duration: 2000,
  origin:'bottom',
  distance:'100px',
  viewFactor: 0.5,
  opacity: 0.1,
  reset: true
});
sr.reveal('#r2', {
  duration: 2000,
  origin:'bottom',
  distance:'100px',
  viewFactor: 0.5,
  opacity: 0.1,
  reset: true
});
sr.reveal('#r3', {
  duration: 2000,
  origin:'bottom',
  distance:'100px',
  viewFactor: 0.5,
  opacity: 0.1,
  reset: true
});
$(function() {
          // Smooth Scrolling
          $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
              }
            }
          });
        });