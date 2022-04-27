$(document).ready(function(){
	$(window).scroll(function(){
		var windowWidth = $(window).width();
		if (windowWidth > 800){
			var scroll = $(window).scrollTop();

			$('header .textos').css({
			//	'transform': 'translate(0px,' + scroll / 2 + '%)'
				'transform': 'translate(0px, '+ scroll / 2 + '%)'
			});

			$('.acerca-de article').css({
				'transform': 'translate(0px, -' + scroll / 4 + '%)'
			});
		}
	});

	$(window).resize(function(){
		var windowWidth = $(window).width();
		if (windowWidth < 800){
			$('.acerca-de article').css({
					'transform': 'translate(0px, 0px)'
			});
		}
	});
});
///
$(document).ready(function(){

	// Efecto Menu
	$('.menu a').each(function(index, elemento){
		$(this).css({
			'top': '-200px'
		});
		$(this).animate({
			'top': '0px'
		},2000 + (index * 1000));
	});



// Efecto Header
	if ($(window).width() > 800){
		$('header .textos').css({
			opacity: 0,
			marginTop: 0
		});

		$('header .textos').animate({
			opacity: 1,
			marginTop: '-55px'
		},40000);
	}

// Scroll Elementos Menu
	var acercaDe = $('#acerca-de').offset().top,
		menu = $('#platillos').offset().top,
		galeria = $('#galeria').offset().top,
		redes = $('#redes').offset().top;

// Boton Acerca de
	$('#btn-contactos').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: redes -40
		}, 500);
	});

	$('#btn-menu').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: menu - 40
		});
	});

	$('#btn-galeria').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: galeria - 40
		});
	});

	$('#btn-ubicacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ubicacion - 40
		});
	});


});