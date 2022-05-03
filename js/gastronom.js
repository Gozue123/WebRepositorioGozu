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
		},1000 + (index * 500));
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
		contactos = $('#contactos').offset().top,
		recetas = $('#recetas').offset().top;

// Boton Acerca de
	$('#btn-contactos').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contactos - 40
		});
	});

	$('#btn-platos').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: recetas - 40
		});
	});

	$('#btn-contactos').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contactos - 40
		});
	});

	$('#btn-ubicacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ubicacion - 40
		});
	});


});