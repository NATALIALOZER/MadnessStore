$(function () {
  $(".collection__slider").slick({
    dots: true,
    arrows: false,
    // centerMode: true,
    centerPadding: "20%",
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
  });

});


$(document).ready(function() {

  //Phone Ajax Send
	$('.phone-form').submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//E-mail Ajax Send
	$('#email-form').submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});









// $(document).ready(function () {
//   //E-mail Ajax Send
//   $(".footer__form").submit(function () {
//     //Change
//     var th = $(this);
//     $.ajax({
//       type: "POST",
//       url: "mail.php", //Change
//       data: th.serialize(),
//     }).done(function () {
//       alert("Thank you!");
//       setTimeout(function () {
//         // Done Functions
//         th.trigger("reset");
//       }, 1000);
//     });
//     return false;
//   });
// });

// "use strict"

// document.addEventListener('DOMContentLoaded',function(){
//     const form = document.getElementById('form');
//     form.addEventListener('submit', formSend);

//     async function formSend(e){
//         e.preventDefault();
//         let error =formValidate(form);
//     }

//     function formValidate(form){
//         let error = 0;
//         let formReq = document.querySelectorAll('._req')

//         for(let index = 0; index<formReq.length; index++){
//             const input = formReq[index];
//             formRemoveError(input);

//             if(input.classList.contains('_email')){

//             }

//         }
//     }

//     function formAddError(input){
//         input.parentElement.classList.add('_error')
//         input.classList.add('_error')
//     }
//     function formRemoveError(input){
//         input.parentElement.classList.remove('_error')
//         input.classList.remove('_error')
//     }

//     function emailTest(input) {
//         return
//     }
// });
