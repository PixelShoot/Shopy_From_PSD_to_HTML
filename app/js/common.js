$(document).ready(function(){
	var mq = window.matchMedia( "(min-width: 992px)" );
	$(".owl-carousel").owlCarousel({
		"margin":20,
		"responsive": {
			0: {
				items: 1
			},
			500: {
				items: 2
			},
			600: {
				items: 3
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});
});
if(type=="products"){
	var slider = document.getElementById('slider');

	var rangeSlider = document.getElementById('slider');

	noUiSlider.create(rangeSlider, {
		start: [ 10, 100 ],
		connect: true,
		tooltips: [ true, true ],
		range: {
			'min': [ 0 ],
			'max': [ 150 ]
		}
	});
	var inputNumber1 = document.getElementById('input-number1');
	var inputNumber2 = document.getElementById('input-number2');
	rangeSlider.noUiSlider.on('update', function( values, handle ) {
		var value = values[handle];
		if ( handle ) {
			inputNumber2.value = Math.round(value);
		} else {
			inputNumber1.value = Math.round(value);
		}
	});
	inputNumber1.addEventListener('change', function(){
		rangeSlider.noUiSlider.set([null, this.value]);
	});
	inputNumber2.addEventListener('change', function(){
		rangeSlider.noUiSlider.set([null, this.value]);
	});
}
if(type=="product_show"){

	var slideIndex = 1;
	showDivs(slideIndex);
	function plusDivs(n) {
		showDivs(slideIndex += n);
	}
	function currentDiv(n) {
		showDivs(slideIndex = n);
	}
	function showDivs(n) {
		var i;
		var x = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("img_slide");
		if (n > x.length) {slideIndex = 1}
			if (n < 1) {slideIndex = x.length}
				for (i = 0; i < x.length; i++) {
					x[i].style.display = "none";
				}
				for (i = 0; i < dots.length; i++) {
					dots[i].className = dots[i].className.replace("active", "");
				}
				x[slideIndex-1].style.display = "block";
				dots[slideIndex-1].className += " active";
			}
			jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div></div>').insertAfter('.quantity input');
			jQuery('<div class="quantity-nav"><div class="quantity-button quantity-down">-</div></div>').insertBefore('.quantity input');
			jQuery('.quantity').each(function() {
				var spinner = jQuery(this),
				input = spinner.find('input[type="number"]'),
				btnUp = spinner.find('.quantity-up'),
				btnDown = spinner.find('.quantity-down'),
				min = input.attr('min'),
				max = input.attr('max');

				btnUp.click(function() {
					var oldValue = parseFloat(input.val());
					if (oldValue >= max) {
						var newVal = oldValue;
					} else {
						var newVal = oldValue + 1;
					}
					spinner.find("input").val(newVal);
					spinner.find("input").trigger("change");
				});
				btnDown.click(function() {
					var oldValue = parseFloat(input.val());
					if (oldValue <= min) {
						var newVal = oldValue;
					} else {
						var newVal = oldValue - 1;
					}
					spinner.find("input").val(newVal);
					spinner.find("input").trigger("change");
				});

			});

		}