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



});