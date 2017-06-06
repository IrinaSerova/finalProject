jQuery(document).ready(function ($) {


	// tabs



	var contentDiv = '<div id="content"></div>';
	$(contentDiv).appendTo('dl.tabs');
	$('dl.tabs dd').hide();
	var content = $('dl.tabs dt.active').next('dd').html();
	$('#content').html(content);

	$('dl.tabs dt').on('click', function () {
		$('dl.tabs dt').removeClass('active');
		content = $(this).addClass('active').next('dd').html();
		$('#content').html(content);
	});



	// end tabs
	// accordion




	var accItem = document.getElementsByClassName('accordionItem');
	var accHD = document.getElementsByClassName('accordionItemHeading');
	for (i = 0; i < accHD.length; i++) {
		accHD[i].addEventListener('click', toggleItem, false);
	}

	function toggleItem() {
		var itemClass = this.parentNode.className;
		for (i = 0; i < accItem.length; i++) {
			accItem[i].className = 'accordionItem close';
		}
		if (itemClass == 'accordionItem close') {
			this.parentNode.className = 'accordionItem open';
		}
	}



	// end accordion





	// vertical tabs 

	$(document).on("click", ".tabsAside .menu div", function () {
		var numberIndex = $(this).index();

		if (!$(this).is("active")) {
			$(".tabsAside .menu div").removeClass("active");
			$(".tabsAside ul li").removeClass("active");

			$(this).addClass("active");
			$(".tabsAside ul").find("li:eq(" + numberIndex + ")").addClass("active");

			var listItemHeight = $(".tabsAside ul")
				.find("li:eq(" + numberIndex + ")")
				.innerHeight();
			$(".tabsAside ul").height(listItemHeight + "px");
		}
	});


	// end vertical tabs

	// gallery
	$('#gallery img').each(function () {
		// preload images
		var imgFile = $(this).attr('src');
		var preloadImg = new Image();
		var imgExp = /sg.jpg/g;
		preloadImg.src = imgFile.replace(imgExp, 's.jpg');
		//ends preload images portion

		// image swap
		$(this).hover(
			function () { // mouse enter function
				$(this).attr('src', preloadImg.src);
			},
			function () { // mouse leave function
				$(this).attr('src', imgFile);
			}); // end hover
	}); //ends each

	// gallery - large image display
	$('#gallery a').click(function (evt) {
		evt.preventDefault();
		var imgPath = $(this).attr('href');
		var oldImg = $('#bigPic img'); //get reference to the old image
		var newImg = $('<img src="' + imgPath + '" />');

		newImg.hide();
		$('#bigPic').prepend(newImg);
		newImg.fadeIn(1200);

		oldImg.fadeOut(1000, function () {
			$(this).remove();
		});

	}); // end click function

	$('#gallery img:first').click();
	//end gallery

	// login
	//jQuery time
	var current_fs, next_fs, previous_fs; //fieldsets
	var left, opacity, scale; //fieldset properties which we will animate
	var animating; //flag to prevent quick multi-click glitches

	$(".next").click(function () {
		if (animating) return false;
		animating = true;

		current_fs = $(this).parent();
		next_fs = $(this).parent().next();

		//activate next step on progressbar using the index of next_fs
		$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

		//show the next fieldset
		next_fs.show();
		//hide the current fieldset with style
		current_fs.animate({
			opacity: 0
		}, {
			step: function (now, mx) {
				//as the opacity of current_fs reduces to 0 - stored in "now"
				//1. scale current_fs down to 80%
				scale = 1 - (1 - now) * 0.2;
				//2. bring next_fs from the right(50%)
				left = (now * 50) + "%";
				//3. increase opacity of next_fs to 1 as it moves in
				opacity = 1 - now;
				current_fs.css({
					'transform': 'scale(' + scale + ')',
					'position': 'absolute'
				});
				next_fs.css({
					'left': left,
					'opacity': opacity
				});
			},
			duration: 800,
			complete: function () {
				current_fs.hide();
				animating = false;
			},
			//this comes from the custom easing plugin
			easing: 'easeInOutBack'
		});
	});

	$(".previous").click(function () {
		if (animating) return false;
		animating = true;

		current_fs = $(this).parent();
		previous_fs = $(this).parent().prev();

		//de-activate current step on progressbar
		$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

		//show the previous fieldset
		previous_fs.show();
		//hide the current fieldset with style
		current_fs.animate({
			opacity: 0
		}, {
			step: function (now, mx) {
				//as the opacity of current_fs reduces to 0 - stored in "now"
				//1. scale previous_fs from 80% to 100%
				scale = 0.8 + (1 - now) * 0.2;
				//2. take current_fs to the right(50%) - from 0%
				left = ((1 - now) * 50) + "%";
				//3. increase opacity of previous_fs to 1 as it moves in
				opacity = 1 - now;
				current_fs.css({
					'left': left
				});
				previous_fs.css({
					'transform': 'scale(' + scale + ')',
					'opacity': opacity
				});
			},
			duration: 800,
			complete: function () {
				current_fs.hide();
				animating = false;
			},
			//this comes from the custom easing plugin
			easing: 'easeInOutBack'
		});
	});

	$(".submit").click(function () {
		return false;
	});

	// end login	



}); // end doc ready