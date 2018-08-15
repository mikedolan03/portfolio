
function main() {

let darkTheme = true;

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

		$('.toggle-theme').on('click', function (event) {
			event.preventDefault();
			
			if(darkTheme) {
				darkTheme = false;
				$('body').addClass('light-theme').removeClass('dark-theme'); 
				$('.sun').addClass('hide');
				$('.moon').removeClass('hide'); 

			} else {
				darkTheme = true;
				$('body').addClass('dark-theme').removeClass('light-theme'); 
 				$('.sun').removeClass('hide');
				$('.moon').addClass('hide'); 
			}

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
