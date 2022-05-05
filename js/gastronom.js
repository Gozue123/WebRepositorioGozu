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
    $("#butondx").click(function(){
        $("#divdx").animate({
            height: 'toggle'
        });
    });
});
$(document).ready(function(){
    $("#butondxx").click(function(){
        $("#divdxx").animate({
            height: 'toggle'
        });
    });
});
$(document).ready(function(){
    $("#butondxxx").click(function(){
        $("#divdxxx").animate({
            height: 'toggle'
        });
    });
});

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


});


