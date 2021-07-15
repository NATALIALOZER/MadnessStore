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



$(".menu__item" ).click(function() {
	$("#menu__toggle").prop("checked", false);
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




