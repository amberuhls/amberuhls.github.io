$(document).ready(function(){
  if($('#nav-placeholder').length){
     $("#nav-placeholder").load("/assets/html/nav.html");
  }
  if($('#footer-placeholder').length){
     $("#footer-placeholder").load("/assets/html/footer.html");
  }
  if($('#contact-placeholder').length){
     $("#contact-placeholder").load("/assets/html/contact.html");
  }
  if ($(document).height() > $(window).height()) {
      $('#footer-placeholder').css('position', 'relative');
  }
});
