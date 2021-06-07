$(function(){
 
 'use strict';

$('.our-projects ul li').on('click', function() {
$(this).addClass('active').siblings().removeClass('active');
		if ($(this).data('class') == 'all'){
			$('.gallery .col-md').css('opacity' ,'1');
		}else{
			$('.gallery .col-md').css('opacity' ,'.08');
			$($(this).data('class')).parent().css('opacity',1);
		}
	});

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
});

