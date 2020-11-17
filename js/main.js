// HUM MENU

let hum_btn = $('.hum_btn');
let slide_menu = $('.slide_menu');
let slide_menu_element = $('.slide_menu .header_menu_element a');
let is_open = false;

slide_menu_element.click(function(){
	hum_btn.removeClass('hum_btn_close');
	slide_menu.removeClass('activ');
	is_open = false;
});
hum_btn.click(function(){
	if(!is_open){
		slide_menu.addClass('activ');
		hum_btn.addClass('hum_btn_close')
		is_open = true;
	}else{
		slide_menu.removeClass('activ');
		hum_btn.removeClass('hum_btn_close');
		is_open = false;
	}
});

// SCROLL

$(document).ready(function () {
    $("a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        /*if ($.browser.safari) {
            $('body').animate({ scrollTop: destination }, 1100); //1100 - скорость
        } else {*/
            $('html').animate({ scrollTop: destination }, 1100);
        //}
        return false;
    });
});

// Отправка заявки

$(document).ready(function() {
	$('#form').submit(function() {
		if ($('#input_name').val() == '' || $('#input_email').val() == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
			
		});
		return false;
	});
	$('#form2').submit(function() {
		if ($('#contact_name').val() == '' || $('#contact_email').val() == '' || $('#contact_phone').val() == '' || $('#contact_message').val() == '') {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#form2').trigger('reset');
		});
		return false;
	});
});

// Закрыть попап

$('.js-close-thank-you').click(function() {
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) {
    var popup = $('.popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-thank-you').fadeOut();
    }
});

// gallery slider

let click_img = $('.gallery_content img');
let gallery_slider = $('.gallery_slider');
let gallery_slider_content = $('.gallery_slider_content');
let close = $('.close');
let arrow_l = $('.arrow_left');
let arrow_r = $('.arrow_right');
let wid = 0;
let step = 650;

if(window.innerWidth > 768){
	for (let i = 0; i < click_img.length; i++) {
		click_img[i].addEventListener('click', (evt) => {
			gallery_slider.css('display', 'flex');
			wid = - i * step;
			gallery_slider_content.css('transform', 'translate(' + wid + 'px, 0)');
		});

		gallery_slider.click(function(event){
			if(event.target == this || event.target == close[0]){
				gallery_slider.css('display', 'none');
			}
		});
	}
}

arrow_r.click(function(){
	if(wid - step > - step * 6){
		wid -= step;
		gallery_slider_content.css('transform', 'translate(' + wid + 'px, 0)');
	}
});

arrow_l.click(function(){
	if(wid + step <= 0){
		wid += step;
		gallery_slider_content.css('transform', 'translate(' + wid + 'px, 0)');
	}
});