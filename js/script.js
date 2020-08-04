$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .header-body-menu').toggleClass('active');
      $('body').toggleClass('lock');
   })

   var validName = false;
   var validEmail = false;

   $('form').submit(function (event) {
      event.preventDefault();

      var name = $('#name').val();
      var email = $('#email').val();

      if (name == '') {
         $('#name').addClass('has-arror');
      } else {
         validName = true;
      }

      if (email == '') {
         $('#email').addClass('has-arror');
      } else {
         validEmail = true;
      }

      if (validName == true && validEmail == true) {
         $("form").unbind('submit').submit();
      }
   })
})