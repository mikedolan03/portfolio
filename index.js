
function main() {


	$('.contact-link').on('click', function (event) {
			event.preventDefault();
			scrollToContact();
		}); 

	$('.about-link').on('click', function (event) {
			event.preventDefault();
			scrollToAbout();
		}); 

	$('.portfolio-link').on('click', function (event) {
			event.preventDefault();
			scrollToPortfolio();
		}); 


}



function scrollToContact(){
	$('html, body').animate({
		scrollTop: $('#contact').offset().top
	},1000);
}

function scrollToPortfolio(){
	$('html, body').animate({
		scrollTop: $('#projects').offset().top
	},1000);
}

function scrollToAbout(){
	$('html, body').animate({
		scrollTop: $('#about').offset().top
	},1000);
}



//on page load
$(function() {

	main();
});
